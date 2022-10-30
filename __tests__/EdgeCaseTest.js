const problem1 = require("../src/problem1");

describe("problem1", () => {
  test("최소 페이지 1미만의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([0, 1], [197, 198])).toEqual(-1);
  });

  test("최대 페이지 400초과의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([93, 94], [401, 402])).toEqual(-1);
  });

  test("포비의 왼쪽 페이지가 홀수일 때 크롱의 왼쪽 페이지가 짝수이라면? 누군가 다른 책을 핀 것이므로 예외사항을 반환해야 한다.", () => {
    expect(problem1([99, 100], [194, 195])).toEqual(-1);
    expect(problem1([100, 101], [193, 194])).toEqual(-1);
  });

  test("pobi와 crong의 배열 길이가 2가 아닌 경우 예외사항을 반환해야 한다.", () => {
    expect(problem1([1, 2, 3], [193, 194])).toEqual(-1);
    expect(problem1([100, 101], [20, 21, 22])).toEqual(-1);
  });
});
