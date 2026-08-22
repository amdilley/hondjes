import { useMounted } from "@/hooks/useMounted";
import { useId, useRef, useState, type HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  label: string;
  initialValue?: string | undefined;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  errorText?: string;
  validator?: (value: any) => boolean;
};

export function Input({
  name,
  label,
  initialValue,
  required = false,
  type = "text",
  errorText,
  validator,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasError, setHasError] = useState(false);
  const errorId = useId();

  const handleValidation = () => {
    const value = inputRef.current?.value;

    if (required && value === "") {
      setHasError(true);
      return;
    }

    if (validator && !validator(value)) {
      setHasError(true);
      return;
    }

    setHasError(false);
  };

  useMounted(() => {
    if (inputRef.current && initialValue) {
      inputRef.current.value = initialValue;
    }
  });

  return (
    <div className="input__wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={hasError}
        aria-errormessage={errorId}
        onBlur={handleValidation}
      />
      {hasError && errorText && (
        <span id={errorId} className="input__error">
          {errorText}
        </span>
      )}
    </div>
  );
}
