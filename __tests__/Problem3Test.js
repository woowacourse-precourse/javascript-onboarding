const { checkInputError } = require("../src/problem3.util");

describe("checkInputError", () => {
  it("is return true by small", () => {
    expect(checkInputError(0)).toEqual(true);
  });

  it("is return true by big", () => {
    expect(checkInputError(10001)).toEqual(true);
  });

  it("is return false", () => {
    expect(checkInputError(500)).toEqual(false);
  });
});
