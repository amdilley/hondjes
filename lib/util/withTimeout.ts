type Options = {
  timeout?: number;
  timeoutError?: string;
};

export async function withTimeout<T>(
  promise: Promise<T>,
  options: Options = {},
) {
  const { timeout, timeoutError } = {
    timeout: 5000,
    timeoutError: "Promise timed out",
    ...options,
  };

  const timeoutPromise = new Promise<Error>((_, reject) => {
    setTimeout(() => reject(new Error(timeoutError)), timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}
