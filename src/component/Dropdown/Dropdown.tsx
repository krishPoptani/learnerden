'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import clsx from 'clsx';
import { capitalizeFirstLetter, useClickOutside } from '@/lib/common';
const userIcon = '/assets/icons/user.svg';
const DownIcon = '/icons/dropdown-arrow.svg';

type Option = {
  label: any;
  value: any;
};

type DropdownProps = {
  control: Control<any>;
  name: string;
  label?: string;
  options: Option[];
  isWritable?: boolean;
  labelValue?: string;
  inputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  showValue?: boolean;
  icon?: boolean;
  isShowerror?: boolean;
  isCheckmarked?: boolean;
  error?: string | boolean;
  defaultValue?: any;
  isMulti?: boolean;
  onRemoveValue?: () => void;
  isRadio?: boolean;
  disabled?: boolean;
  props?: any;
};

export default function Dropdown({
  control,
  name,
  label,
  options,
  isWritable,
  labelValue,
  inputChange,
  placeholder,
  required = false,
  showValue = false,
  icon,
  isShowerror = false,
  isCheckmarked = false,
  error,
  defaultValue,
  isMulti = false,
  onRemoveValue,
  isRadio = false,
  disabled = false,
  props,
}: DropdownProps) {
  if (!control) return null;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={isShowerror ? { required: `${label || labelValue} is required` } : undefined}
      render={({ field }) => (
        <DropdownFn
          {...field}
          {...props}
          label={label}
          required={required}
          showValue={showValue}
          onRemoveValue={onRemoveValue}
          isWritable={isWritable}
          isMulti={isMulti}
          options={options}
          inputChange={inputChange}
          placeholder={placeholder}
          icon={icon}
          error={error}
          defaultValue={defaultValue}
          isCheckmarked={isCheckmarked}
          isRadio={isRadio}
          disabled={disabled}
        />
      )}
    />
  );
}

type DropdownFnProps = {
  value?: any;
  onChange : (value: any) => void;
  name: string;
  label?: string;
  showValue?: boolean;
  icon?: boolean;
  required?: boolean;
  inputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  options: Option[];
  isMulti?: boolean;
  error?: string;
  disabled?: boolean;
  defaultValue?: any;
  isWritable?: boolean;
  isCheckmarked?: boolean;
  onRemoveValue?: () => void;
  isRadio?: boolean;
};

function DropdownFn({
  onChange,
  isCheckmarked,
  isWritable,
  isRadio,
  name,
  label,
  showValue,
  value,
  icon,
  required,
  inputChange,
  placeholder,
  options,
  isMulti,
  error,
  disabled,
  defaultValue,
}: DropdownFnProps) {
  const [dropdown, setDropdown] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState<string | string[]>('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<string[]>([]);
  const arrOfIds = options
    ?.map((option) => (option.value !== 'select_all' ? option.value : null))
    ?.filter((data): data is string => data !== null);

  useClickOutside(dropdownRef, () => {
    if (dropdown) {
      setDropdown(false);
    }
  });

  function selectAll() {
    setValues(arrOfIds);
    onChange(arrOfIds);
  }

  function unSelectAll() {
    setValues([]);
    onChange([]);
  }

  const handleOptionClick = (val: string, e: React.MouseEvent) => {
    if (isMulti) {
      if (val === 'select_all') {
        values.length === 0 ? selectAll() : unSelectAll();
      } else {
        let data: string[];
        if (Array.isArray(value) && value.includes(val)) {
          data = value.filter((v: string) => v !== val);
        } else {
          data = Array.isArray(value) ? [...value, val] : [val];
        }
        onChange(data);
      }
    } else {
      const label = options.find((option) => option.value === val)?.label || '';
      setSelectedLabels(label);
      onChange(val);
    }
    (e.target as HTMLInputElement).value = '';
    if (!isCheckmarked || isRadio) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    const selectedOptions = options?.find((option) =>
      Array.isArray(value) ? value.includes(option.value) : option.value === value
    );
    if (selectedOptions) {
      if (Array.isArray(selectedOptions)) {
        const labels = selectedOptions.map((option) => option.label);
        setSelectedLabels(labels);
      } else {
        setSelectedLabels(selectedOptions.label);
      }
    } else {
      setSelectedLabels('');
    }
  }, [value, options]);

  const displayValue = () => {
    if (isMulti) {
      if (Array.isArray(value) && value.length > 0) {
        const labels = value.map((val: string) => {
          const selectedOption = options?.find((option) => option.value === val);
          return selectedOption ? capitalizeFirstLetter(selectedOption.label) : '';
        });
        const records = labels.filter((label) => label.trim() !== '' && label !== 'Select All');
        return records.length > 0 ? records.join(', ') : null;
      } else {
        return '';
      }
    } else {
      return capitalizeFirstLetter(selectedLabels as string);
    }
  };

const inputClasses = clsx(
  'w-full bg-transparent rounded-lg h-[50px] text-sm cursor-pointer px-3',
  icon ? 'pl-[53px]' : 'pl-3',
  'pr-10 focus:outline-none',
  'border border-[1px] !border-[#A0A0A0]',
  error ? '!border-blue-500 animate-shake' : '',
);

  return (
     <div className="relative w-full">
      {label && (
        <div className="mb-1">
          <label className="text-sm font-normal text-[#4E4E4E]">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
      )}
      <div ref={dropdownRef} className="relative w-full">
        <input
          type="text"
          value={showValue ? displayValue() || defaultValue || '' : ''}
          readOnly={!isWritable}
          onChange={inputChange}
          placeholder={placeholder}
          className={inputClasses}
          onClick={() => !disabled && setDropdown(!dropdown)}
          disabled={disabled}
        />
        {/* Right dropdown icon */}
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => !disabled && setDropdown(!dropdown)}
        >
          <img src={DownIcon} alt="Down Icon" />
        </div>

        {/* Optional left icon */}
        {icon && userIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pr-4 border-r border-[#A0A0A0] h-5 flex items-center">
            <img src={userIcon} alt="User Icon" />
          </div>
        )}

        {/* Dropdown menu */}
        <div
          className={clsx(
            'absolute top-full left-0 w-full bg-white rounded-lg shadow-md z-50 transition-all',
            dropdown ? 'max-h-[350px] overflow-y-auto' : 'max-h-0 overflow-hidden'
          )}
        >
          <div className={clsx('flex flex-col', isCheckmarked && 'gap-2')}>
            {options.length > 0 ? (
              isCheckmarked ? (
                options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center gap-3 px-4 py-2 !border-b !last:border-b-0 text-sm cursor-pointer"
                    onClick={(e) => handleOptionClick(option.value, e)}
                  >
                    <input
                      type={isRadio ? 'radio' : 'checkbox'}
                      className="w-4 h-4 accent-indigo-600"
                      checked={
                        Array.isArray(value)
                          ? value.includes(option.value) ||
                            (value.length === options.length - 1 && option.value === 'select_all')
                          : false
                      }
                      readOnly
                    />
                    <span>{capitalizeFirstLetter(option.label)}</span>
                  </div>
                ))
              ) : (
                options.map((option) => (
                  <span
                    key={option.value}
                    className="px-4 py-2 border-b last:border-b-0 text-sm hover:text-pink-700 hover:border-pink-700 cursor-pointer"
                    onClick={(e) => handleOptionClick(option.value, e)}
                  >
                    {capitalizeFirstLetter(option.label)}
                  </span>
                ))
              )
            ) : (
              <span className="px-4 py-2 text-sm text-[#A0A0A0]">No content found</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
