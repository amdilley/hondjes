export type NullToUndefined<T extends object> = {
  [K in keyof T]: T[K] extends object
    ? NullToUndefined<T[K]>
    : null extends T[K]
      ? undefined
      : T[K];
};
