const {
  checkInputError,
  countClapOfNum,
  totalCountClap,
} = require("../src/problem3.util");

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

describe("countClapOfNum", () => {
  it('is input "35" output "1"', () => {
    expect(countClapOfNum(35)).toEqual(1);
  });

  it('is input "369" output "3"', () => {
    expect(countClapOfNum(369)).toEqual(3);
  });
  it('is input "3" output "1"', () => {
    expect(countClapOfNum(3)).toEqual(1);
  });
  it('is input "33" output "2"', () => {
    expect(countClapOfNum(33)).toEqual(2);
  });
});

describe("totalCountClap", () => {
  it("case1", () => {
    expect(totalCountClap(13)).toEqual(4);
  });
  it("case2", () => {
    expect(totalCountClap(33)).toEqual(14);
  });
});
