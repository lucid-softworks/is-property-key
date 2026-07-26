import { describe, expect, it } from "vitest";

import { isPropertyKey } from "../src/index.js";

describe("isPropertyKey", () => {
  it.each([
    ["key", true],
    [42, true],
    [Symbol.iterator, true],
    [42n, false],
    [{}, false],
  ])("checks a value", (value, expected) => {
    expect(isPropertyKey(value)).toBe(expected);
  });
});
