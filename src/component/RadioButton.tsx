import React, { FC } from 'react';

type RadioButtonProps = {
  name: string;
  value: string;
  checked?: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: FC<RadioButtonProps> = ({ name, value, checked, label, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-blue-600 focus:ring-blue-500"
      />
      <label htmlFor={value} className="text-gray-700 font-medium text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
