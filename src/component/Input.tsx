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
      <label className="text-gray-700 font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name} // Add name attribute
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 placeholder-gray-400 transition duration-300"
      />
    </div>
  );
};

export default Input;
