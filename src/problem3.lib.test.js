// @ts-nocheck

const { naiveCountOfDigits369FromOneTo } = require("./problem3.lib");

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
});
