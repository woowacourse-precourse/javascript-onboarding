const problem5 = require("../src/problem5");

describe("problem5: 현금 출금", () => {
  test("case1: 우테코 예제 테스트 케이스", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });
  test("case2: 다양한 테스트", () => {
    expect(problem5(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
    expect(problem5(11111)).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 1]);
    expect(problem5(22222)).toEqual([0, 2, 0, 2, 0, 2, 0, 2, 2]);
    expect(problem5(22722)).toEqual([0, 2, 0, 2, 1, 2, 0, 2, 2]);
    expect(problem5(985357)).toEqual([19, 3, 1, 0, 0, 3, 1, 0, 7]);
    expect(problem5(1000000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
