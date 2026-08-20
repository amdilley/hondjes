type Props = {
  uploadPath: string;
  maxSize?: number;
  fetcher?: typeof fetch;
  onSuccess?: (response: Response) => void;
  onError?: (error: unknown) => void;
  onExceedMaxSize?: () => void;
};

export function ImageUpload({
  uploadPath,
  maxSize = 1024 * 1024 * 5, // 5MB
  fetcher = fetch,
  onError,
  onExceedMaxSize,
  onSuccess,
}: Props) {
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    /* v8 ignore next */
    if (!file) {
      return;
    }

    if (file.size > maxSize) {
      onExceedMaxSize?.();
      return;
    }

    const formData = new FormData();

    formData.append("image", file);

    try {
      const response = await fetcher(uploadPath, {
        method: "POST",
        body: formData,
      });

      onSuccess?.(response);
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <form>
      <input
        type="file"
        accept="image/*"
        role="button"
        onChange={handleImageUpload}
      />
    </form>
  );
}
