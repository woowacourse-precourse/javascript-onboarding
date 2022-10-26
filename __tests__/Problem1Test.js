const {
  checkInputError,
  addPageNum,
  mulPageNum,
  getLargeNum,
} = require("../src/problem1.util");

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
  it("is return true then by wrong input because of left large then 400", () => {
    expect(checkInputError([401, 3])).toEqual(true);
  });
  it("is return true then by wrong input because of right large then 400", () => {
    expect(checkInputError([3, 401])).toEqual(true);
  });
  it("is return true then by wrong input because of left small then 0", () => {
    expect(checkInputError([-1, 5])).toEqual(true);
  });
  it("is return true then by wrong input because of right small then 0", () => {
    expect(checkInputError([5, -1])).toEqual(true);
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

describe("mulPageNum", () => {
  it("is input 35 output 15", () => {
    expect(mulPageNum(35)).toEqual(15);
  });
  it("is input 3 output 3", () => {
    expect(mulPageNum(3)).toEqual(3);
  });
  it("is input 333 output 27", () => {
    expect(mulPageNum(333)).toEqual(27);
  });
  it("is input 20 output 0", () => {
    expect(mulPageNum(20)).toEqual(0);
  });
});

describe("getLargeNum", () => {
  it("is input 35 output 15 by mulPageNum", () => {
    expect(getLargeNum(35)).toEqual(15);
  });
  it("is input 10 output 1 by addPageNum", () => {
    expect(getLargeNum(10)).toEqual(1);
  });
  it("is input 123 output 6", () => {
    expect(getLargeNum(123)).toEqual(6);
  });
});
