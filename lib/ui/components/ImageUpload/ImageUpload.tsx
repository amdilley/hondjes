import Image from "next/image";
import { useId, useState } from "react";

type Props = {
  name: string;
  label: string;
  image?: string | undefined;
  imageAlt?: string | undefined;
  maxSize?: number;
  onUpload?: (file: File) => void;
};

export function ImageUpload({
  name,
  label,
  image,
  imageAlt,
  maxSize = 1024 * 1024 * 5, // 5MB
  onUpload,
}: Props) {
  const [hasError, setHasError] = useState(false);
  const errorId = useId();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    /* v8 ignore next */
    if (!file) {
      return;
    }

    if (file.size > maxSize) {
      setHasError(true);
      return;
    }

    setHasError(false);
    onUpload?.(file);
  };

  return (
    <div className="image-loader__wrapper">
      <label htmlFor={name}>{label}</label>
      {image && <Image src={image} alt={imageAlt ?? "image"} fill />}
      <input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        role="button"
        aria-invalid={hasError}
        aria-errormessage={errorId}
        onChange={handleImageUpload}
      />
      {hasError && (
        <span id={errorId} className="input__error">
          File too big
        </span>
      )}
    </div>
  );
}
