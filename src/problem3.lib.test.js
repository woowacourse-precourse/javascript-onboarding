// @ts-nocheck

const {
  naiveCountOfDigits369FromOneTo,
  range,
  countOfDigits369FromZeroUntil,
} = require("./problem3.lib");

describe("Count number of digits 3, 6, 9 in 1..N", () => {
  test.each([
    [0, 0],
    [1, 0],
    [3, 1],
    [6, 2],
    [13, 4],
    [33, 14],
  ])("basic test cases", (input, expected) => {
    const actual = naiveCountOfDigits369FromOneTo(input);
    expect(actual).toBe(expected);
  });

  test.each(range(1, 100))(
    "naive and smart approaches make the same result",
    (n) => {
      const naive = naiveCountOfDigits369FromOneTo(n);
      const smart = countOfDigits369FromZeroUntil(n + 1);
      expect([n, smart]).toEqual([n, naive]);
    }
  );
});
