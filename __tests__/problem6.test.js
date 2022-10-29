const problem6 = require("../src/problem6");

describe("problem6: 비슷한 아이디 찾기", () => {
  test("case1: 우테코 예제 테스트 케이스", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
    ).toEqual(["jason@email.com", "jm@email.com", "mj@email.com"]);
  });
});