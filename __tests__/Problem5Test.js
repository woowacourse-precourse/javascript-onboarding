const { checkInputError } = require("../src/problem5.util");

describe("checkInputError", () => {
  it("is return true because input is small", () => {
    expect(checkInputError(0)).toEqual(true);
  });
  it("is return true because input is large", () => {
    expect(checkInputError(1000001)).toEqual(true);
  });
  it("is return false", () => {
    expect(checkInputError(500)).toEqual(false);
  });
});

describe("countNumByMoney", () => {
  it("pase 1", () => {
    expect(countNumByMoney(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });
  it("pase 2", () => {
    expect(countNumByMoney(50237)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
});
