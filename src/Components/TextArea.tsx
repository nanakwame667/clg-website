import React, { forwardRef, TextareaHTMLAttributes } from "react";

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  id: string;
  label?: string;
  className?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { id, label, className = "", required = false, error, disabled, ...props },
    ref
  ) => {
    return (
      <div className="relative flex flex-col">
        {label && (
          <label htmlFor={id} className="mb-1 text-sm text-black font-normal">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          {...props}
          ref={ref}
          id={id}
          required={required}
          className={`resize-none outline-none p-2         focus:outline-none
          focus:shadow-outline
          focus:ring-primary-200
          focus:border-primary-200
          focus:border-2    text-sm     text-border
          font-normal ${
            disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"
          } ${className} ${error ? "border-red-600" : ""}`}
          disabled={disabled}
        />
        {error && (
          <p className=" text-sm text-red-600" id={`${id}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default TextArea;
