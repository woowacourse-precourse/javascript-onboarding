const problem1 = require("../src/problem1");

describe("problem1: 매개변수 유효성 검사", () => {
  test("case1 입력된 변수가 길이가 2인 배열이 아님", () => {
    expect(problem1('hi', [197, 198])).toEqual(-1);
    expect(problem1('12', [197, 198])).toEqual(-1);
    expect(problem1([12, 13], true)).toEqual(-1);
    expect(problem1([12, 13])).toEqual(-1);
    expect(problem1([12, 13, 14], [197, 198])).toEqual(-1);
    expect(problem1([12], [197, 198])).toEqual(-1);
  });
  test("case2 배열요소가 숫자가 아님", () => {
    expect(problem1([1, '2'], [197, 198])).toEqual(-1);
    expect(problem1([1, 'two'], [197, 198])).toEqual(-1);
    expect(problem1([1, 2], [197, true])).toEqual(-1);
    expect(problem1([1.1, 2.1], [197, 198])).toEqual(-1);
  });
  test("case3 배열요소가 1 ~ 400 사이에 없음", () => {
    expect(problem1([0, 1], [197, 198])).toEqual(-1);
    expect(problem1([400, 401], [197, 198])).toEqual(-1);
    expect(problem1([12, 13], [400, 401])).toEqual(-1);
  });
  test("case4 왼쪽 페이지 + 1 이 오른쪽 페이지 값과 같지 않음", () => {
    expect(problem1([1, 3], [197, 198])).toEqual(-1);
    expect(problem1([1, 2], [197, 199])).toEqual(-1);
    expect(problem1([true, 2], [197, 199])).toEqual(-1);
  });
  test("case5 왼쪽이 홀수, 오른쪽이 짝수가 아님", () => {
    expect(problem1([2, 3], [197, 198])).toEqual(-1);
    expect(problem1([1, 2], [196, 197])).toEqual(-1);
  });
});