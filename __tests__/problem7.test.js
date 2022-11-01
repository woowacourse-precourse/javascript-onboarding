const problem7 = require("../src/problem7");

describe("problem7: 추천 시스템", () => {
  test("case1 우테코 제공 테스트", () => {
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
  test("case2 유저 순서 변경시에도 같은 결과가 나와야한다.", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "jun"],
          ["shakevan", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["donut", "andole"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(
      problem7(
        "mrko",
        [
          ["donut", "jun"],
          ["shakevan", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["donut", "andole"],
          ["shakevan", "mrko"],
        ],
        ["donut", "bedi", "bedi", "bedi", "shakevan"]
      )
    );
  });
  test("case3 내 친구끼리 친구인 경우에도 추천 목록에 떠서는 안된다.", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "jun"],
          ["shakevan", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["donut", "andole"],
          ["shakevan", "mrko"],
          ["shakevan", "donut"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan", "shakevan"]
      )
    ).toEqual(["andole", "jun", "bedi"]);
  });
  test("case4 6명 이상의 친구가 추천되서는 안된다. 점수 순서로 5명만 표시한다.", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "jun"],
          ["shakevan", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["donut", "andole"],
          ["shakevan", "mrko"],
          ["shakevan", "donut"],
        ],
        [
          "bedi",
          "bedi",
          "donut",
          "bedi",
          "shakevan",
          "shakevan",
          "zz",
          "xx",
          "yy",
          "zz",
        ]
      )
    ).toEqual(["andole", "jun", "bedi", "zz", "xx"]);
  });
  test("case5 6명 이상의 친구가 추천되서는 안된다. 점수가 같을 때에는 이름 순서로 정렬된다.", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "jun"],
          ["shakevan", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["donut", "andole"],
          ["shakevan", "mrko"],
          ["shakevan", "donut"],
        ],
        [
          "bedi",
          "bedi",
          "donut",
          "bedi",
          "shakevan",
          "shakevan",
          "zz",
          "xx",
          "yy",
        ]
      )
    ).toEqual(["andole", "jun", "bedi", "xx", "yy"]);
  });
  test("case6 방문자가 없는 경우에 정상 작동한다.", () => {
    expect(
      problem7(
        "mrko",
        [
          ["mrko", "jun"],
          ["donut", "jun"],
        ],
        []
      )
    ).toEqual(["donut"]);
    expect(
      problem7(
        "mrko",
        [
          ["jun", "donut"],
          ["jun", "mrko"],
        ],
        []
      )
    ).toEqual(["donut"]);
  });
  test("case7 추천할 친구가 없는 경우 빈 배열이 표시된다.", () => {
    expect(problem7("mrko", [["donut", "jun"]], [])).toEqual([]);
  });
});
