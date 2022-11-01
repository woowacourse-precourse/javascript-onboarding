const problem4 = require("../src/problem4");

describe("problem4: 청개구리 ", () => {
  test("case1: 우테코 예제 테스트 케이스", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });
  test("case1: 중간에 영어 말고 다른걸 넣어보자.", () => {
    expect(problem4("I, 정말로 love ! you~.")).toEqual(
      "R, 정말로 olev ! blf~."
    );
  });
});
