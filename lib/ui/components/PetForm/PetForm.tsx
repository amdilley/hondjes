import { useRef, useState } from "react";

import type { Pet } from "@/db/schema";
import { ImageUpload } from "@/ui/components/ImageUpload/ImageUpload";
import { Input } from "@/ui/components/Input/Input";

type Props = {
  pet?: Pet;
  maxSize?: number;
  onSubmit: (formData: FormData) => void;
};

export function PetForm({
  pet,
  maxSize = 1024 * 1024 * 5, // 5MB
  onSubmit,
}: Props) {
  const [uploadedImage, setUploadedImage] = useState<File>();
  const formRef = useRef<HTMLFormElement>(null);

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* v8 ignore next */
    if (!formRef.current) {
      return;
    }

    const formData = new FormData();

    const inputs = formRef.current.querySelectorAll<HTMLInputElement>("input");

    for (const input of inputs) {
      if (input.ariaInvalid === "true") {
        input.focus();
        return;
      }

      if (input.type === "file" && uploadedImage) {
        formData.append(input.name, uploadedImage);
      } else {
        formData.append(input.name, input.value);
      }
    }

    onSubmit(formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" label="Name" required initialValue={pet?.name} />
      <Input
        name="description"
        label="Description"
        initialValue={pet?.description}
      />
      <ImageUpload
        name="image"
        label="Upload image"
        image={pet?.imageUrl}
        imageAlt={pet?.description}
        maxSize={maxSize}
        onUpload={handleImageUpload}
      />
      <button type="submit" aria-label="Submit">
        Submit
      </button>
    </form>
  );
}
