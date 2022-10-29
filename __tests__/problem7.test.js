const problem7 = require("../src/problem7");

describe("problem7: 추천 시스템", () => {
  test("case1", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "jun", "bedi"]);
  });
});

// 함께 아는 친구가 있는 유저가 방문도 한 경우
// 내 친구끼리 서로 친구인 경우
// 6명이 넘는 유저가 할 수 있는 목록에 있는 경우
// 추천할 친구가 없는 경우
// 점수가 같을 때, 이름 순으로 정렬되는 지 검사.
