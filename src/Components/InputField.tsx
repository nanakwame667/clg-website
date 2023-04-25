import React, { ChangeEvent, FC } from "react";

interface InputFieldProps {
  id: string;
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number" | "textarea";
  placeholder?: string;
  className?: string;
  required?: boolean;
  requested?: boolean;
  disabled?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
  required = false,
  disabled = false,
  requested = false,
}) => {
  return (
    <div className={`flex flex-col items-start  ${className}`}>
      <label
        htmlFor={id}
        className={`block text-gray-700 font-book text-sm ${className}`}
      >
        {label}
        {requested && (
          <span className="ml-2 text-lg text-primary-400 font-medium">*</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`
        border
        border-stroke
        rounded-none
        w-[500px]
        py-5 px-4
        h-16
        text-gray-700
        font-book
        text-sm
        leading-tight
        placeholder-placeholder
        focus:outline-none
        focus:shadow-outline
        focus:ring-primary-200
        focus:border-primary-200
        focus:border-2
        ${className}
        `}
      />
    </div>
  );
};

export default InputField;
