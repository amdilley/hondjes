export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

export type NullToUndefined<T> = T extends null
  ? undefined
  : T extends Primitive | Function | Date | RegExp
    ? T
    : T extends (infer U)[]
      ? NullToUndefined<U>[]
      : T extends Map<infer K, infer V>
        ? Map<K, NullToUndefined<V>>
        : T extends Set<infer U>
          ? Set<NullToUndefined<U>>
          : T extends object
            ? { [K in keyof T]: NullToUndefined<T[K]> }
            : unknown;
