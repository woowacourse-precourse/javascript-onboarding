const problem3 = require("../src/problem3");

describe("problem3: 369게임", () => {
  test("case1", () => {
    expect(problem3(13)).toEqual(4);
  });
  test("case2", () => {
    expect(problem3(33)).toEqual(14);
  });
  test("case3: 1부터 10까지 검사", () => {
    expect(problem3(1)).toEqual(0);
    expect(problem3(2)).toEqual(0);
    expect(problem3(3)).toEqual(1);
    expect(problem3(4)).toEqual(1);
    expect(problem3(5)).toEqual(1);
    expect(problem3(6)).toEqual(2);
    expect(problem3(7)).toEqual(2);
    expect(problem3(8)).toEqual(2);
    expect(problem3(9)).toEqual(3);
    expect(problem3(10)).toEqual(3);
  });
});