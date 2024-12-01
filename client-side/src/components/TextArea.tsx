import { FC } from "react";
import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface TextAreaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  error?: FieldError;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  labelClassName?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  name,
  register,
  setValue,
  error,
  placeholder = "Enter text",
  className,
  labelClassName,
}) => {
  return (
    <div>
      {label && (
        <label className={`ml-1 ${labelClassName || ""}`}>{label}</label>
      )}
      <textarea
        id={name}
        placeholder={placeholder}
        className={`border-2 border-slate-400 focus:border-pink-600 focus:outline-none rounded-md w-full p-2 pl-5 mt-2 ${className} ${
          error && `border-red-500`
        }`}
        {...register(name)}
        onBlur={(e) => {
          const trimmedValue = e.target.value.trim();
          setValue(name, trimmedValue); // Update the value with trimmed input
        }}
        rows={4}
        cols={50}
      />
      {error && (
        <p className={`text-red-500 text-sm pt-2 pl-2 ${labelClassName}`}>
          {error.message} !
        </p>
      )}
    </div>
  );
};

export default TextArea;
