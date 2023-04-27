import React, { forwardRef, InputHTMLAttributes, ChangeEvent } from "react";

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  id: string;
  label?: string;
  type?: "text" | "password" | "email" | "number" | "textarea";
  className?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  requested?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      type = "text",
      className = "",
      required = false,
      error,
      placeholder,
      disabled,
      requested,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col items-start  ${className}`}>
        <label
          htmlFor={id}
          className={`block text-black font-normal text-sm ${className}`}
        >
          {label}
          {requested && (
            <span className="ml-2 text-lg text-primary-400 font-medium">*</span>
          )}
        </label>
        <input
          {...props}
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={`
          border
          border-stroke
          border-border
          rounded-none
          w-[500px]
          py-5 px-4
          h-16
          text-border
          font-normal
          text-sm
          leading-tight
          placeholder-placeholder
          focus:outline-none
          focus:shadow-outline
          focus:ring-primary-200
          focus:border-primary-200
          focus:border-2
          ${className}
          ${error ? "border-red-600" : ""}
          `}
        />
        {error && (
          <p className="text-sm text-red-600" id={`${id}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default InputField;
