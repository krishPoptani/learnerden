import React, { FC, ChangeEvent } from 'react';

type InputProps = {
  label: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  required?: boolean;
  name: string; // Add name prop
};

const Input: FC<InputProps> = ({ label, placeholder, onChange, value, type = "text", required = false, name }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="ttext-gray-700 font-medium text-sm group-focus-within:text-[#8D8D8D]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name} // Add name attribute
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border-b-2 border-[#8D8D8D] focus:outline-none focus:border-[#8D8D8D] placeholder-gray-400 placeholder:text-sm transition duration-300"
      />
    </div>
  );
};

export default Input;
