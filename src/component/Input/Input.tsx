import React from "react";
import clsx from "clsx"; // Import clsx
import type { InputHTMLAttributes } from "react";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

export type InputProps<TFormValues extends FieldValues> = {
  labelHeading?: string;
  error?: string;
  icon?: string;
  border?: boolean;
  children?: React.ReactNode;
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

const Input = <TFormValues extends FieldValues>({
  labelHeading,
  error,
  icon,
  border = true,
  children,
  register,
  name,
  ...props
}: InputProps<TFormValues>) => {
  const hasIcon = Boolean(icon);

  return (
    <div className="w-full">
      {/* Label and error display */}
      {(labelHeading || error) && (
        <div className="flex flex-wrap gap-1 pb-2 text-sm text-[#A0A0A0] font-normal">
          {labelHeading && (
            <>
              <label>{labelHeading}</label>
              <span className="text-red-500">*</span>
            </>
          )}
          {error && <span className="text-red-500">{error}</span>}
        </div>
      )}

      <div className="relative w-full">
        {/* Icon (if any) */}
        {icon && (
          <div
            className={clsx(
              "absolute top-1/2 left-4 -translate-y-1/2 flex items-center h-5 pr-4",
              border && "border-r text-[#A0A0A0] border-[#A0A0A0]"
            )}
          >
            <img
              src={icon}
              alt={`${labelHeading || "input"} icon`}
              className="w-[18px]"
            />
          </div>
        )}

        {/* Input Field */}
        <input
          type="text"
          className={clsx(
            "w-full bg-transparent h-[50px] rounded-lg text-sm",
            "placeholder:text-[#A0A0A0] px-3 pr-10 focus:outline-none",
            hasIcon ? "pl-[53px]" : "pl-[14px]",
            error ? "border-red-500" : "border-[#A0A0A0]" // Apply Tailwind border class
          )}
          {...register(name)} // This connects the input to react-hook-form
          {...props}
        />

        {/* Children for any extra content (e.g., action button) */}
        {children && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center text-sm underline text-indigo-600 cursor-pointer">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
