const { checkInputError, addPageNum } = require("../src/problem1.util");

describe("checkInputError", () => {
  it("is return false by correct input", () => {
    expect(checkInputError([1, 2])).toEqual(false);
  });
  it("is return true by wrong input because of right large then left + 1", () => {
    expect(checkInputError([1, 3])).toEqual(true);
  });
  it("is return true then by wrong input because of left large then right", () => {
    expect(checkInputError([4, 3])).toEqual(true);
  });

  it("is return true then by wrong input because of left is even num", () => {
    expect(checkInputError([4, 5])).toEqual(true);
  });
  it("is return true then by wrong input because of right is odd num", () => {
    expect(checkInputError([1, 3])).toEqual(true);
  });
});

describe("addPageNum", () => {
  it("is input 35 output 8", () => {
    expect(addPageNum(35)).toEqual(8);
  });
  it("is input 3 output 3", () => {
    expect(addPageNum(3)).toEqual(3);
  });
  it("is input 333 output 9", () => {
    expect(addPageNum(333)).toEqual(9);
  });
});
