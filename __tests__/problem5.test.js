const problem5 = require("../src/problem5");

describe("problem5: 현금 출금 ", () => {
  test("case1: 우테코 예제 테스트 케이스", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

});