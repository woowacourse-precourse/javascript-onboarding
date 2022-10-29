const problem1 = require("../src/problem1");

describe("problem1: 페이지로 점수 구하기 게임 - 매개변수 유효성 검사", () => {
  test("case1 입력된 변수가 길이가 2인 배열이 아님", () => {
    expect(problem1("hi", [197, 198])).toEqual(-1);
    expect(problem1("12", [197, 198])).toEqual(-1);
    expect(problem1([12, 13], true)).toEqual(-1);
    expect(problem1([12, 13])).toEqual(-1);
    expect(problem1([12, 13, 14], [197, 198])).toEqual(-1);
    expect(problem1([12], [197, 198])).toEqual(-1);
  });
  test("case2 배열요소가 숫자가 아님", () => {
    expect(problem1([1, "2"], [197, 198])).toEqual(-1);
    expect(problem1([1, "two"], [197, 198])).toEqual(-1);
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

describe("problem1: 페이지로 점수 구하기 게임 - 우테코 제공 테스트 케이스를 기반으로한 확장 실험", () => {
  test("case1 무승부", () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });
  test("case2 무승부는 반대로 해도 무승부", () => {
    expect(problem1([197, 198], [97, 98])).toEqual(0);
  });
  test("case3 포비 승리", () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });
  test("case4 포비 승리를 반대로하면 크롱 승리", () => {
    expect(problem1([211, 212], [131, 132])).toEqual(2);
  });
  test("case5 예외 케이스 아님", () => {
    expect(problem1([1, 2], [399, 400])).not.toEqual(-1);
  });
  test("case6 예외 케이스", () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });
});
