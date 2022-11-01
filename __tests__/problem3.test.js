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
  test("case4: 다음 숫자랑의 차이 검사", () => {
    expect(problem3(6392)).toEqual(problem3(6393) - 4);
    expect(problem3(6392)).toEqual(problem3(6394) - 7);
    expect(problem3(6392)).toEqual(problem3(6395) - 10);
    expect(problem3(6392)).toEqual(problem3(6396) - 14);
    expect(problem3(6392)).toEqual(problem3(6397) - 17);
    expect(problem3(6392)).toEqual(problem3(6398) - 20);
    expect(problem3(6392)).toEqual(problem3(6399) - 24);
    expect(problem3(6392)).toEqual(problem3(6400) - 25);
  });
});
