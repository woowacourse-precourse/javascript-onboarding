const problem6 = require("../src/problem6");

describe("problem6: 비슷한 닉네임 찾기", () => {
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
  test("case2: 자기 이름에 이미 중복이 있는 경우", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠제이"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
    ).toEqual(["jason@email.com", "jm@email.com", "mj@email.com"]);
  });
  test("case3: 자기 이름에 이미 중복이 있고, 그 중복 스트링이 다른 사람에게도 있을 경우", () => {
    expect(
      problem6([
        ["user1@email.com", "워니워니"],
        ["user2@email.com", "제워니"],
      ])
    ).toEqual(["user1@email.com", "user2@email.com"]);
  });
  test("case4: 이름이 아예 같은 케이스", () => {
    expect(
      problem6([
        ["user1@email.com", "워니"],
        ["user2@email.com", "워니"],
      ])
    ).toEqual(["user1@email.com", "user2@email.com"]);
  });
  test("case4: 이름이 아예 같은 케이스", () => {
    expect(
      problem6([
        ["user1@email.com", "키키호호"],
        ["user1@email.com", "룰루랄라"],
        ["user3@email.com", "호키키호"],
      ])
    ).toEqual(["user1@email.com", "user3@email.com"]);
  });
});
