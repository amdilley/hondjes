import type { NullToUndefined } from "@/types/common";

function _nullToUndefined<T>(obj: T): NullToUndefined<T> {
  if (obj === null) {
    return undefined as any;
  }

  if (typeof obj === "object") {
    if (obj instanceof Map) {
      obj.forEach((value, key) => obj.set(key, _nullToUndefined(value)));
    } else {
      for (const key in obj) {
        obj[key] = _nullToUndefined(obj[key]) as any;
      }
    }
  }

  return obj as any;
}

export function nullToUndefined<T>(obj: T) {
  return _nullToUndefined(structuredClone(obj));
}
