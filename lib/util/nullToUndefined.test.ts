import { expect, it } from "vitest";

import { nullToUndefined } from "./nullToUndefined";

it("should replace all instances of null with undefined", () => {
  expect(
    nullToUndefined({
      foo: "bar",
      biz: null,
      baz: {
        buzz: null,
      },
      myMap: new Map([
        ["a", 1],
        ["b", null],
      ]),
    }),
  ).toEqual({
    foo: "bar",
    biz: undefined,
    baz: {
      buzz: undefined,
    },
    myMap: new Map([
      ["a", 1],
      ["b", undefined],
    ]),
  });
});
