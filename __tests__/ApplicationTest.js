const problem1 = require("../src/problem1");
const problem2 = require("../src/problem2");
const problem3 = require("../src/problem3");
const problem4 = require("../src/problem4");
const problem5 = require("../src/problem5");
const problem6 = require("../src/problem6");
const problem7 = require("../src/problem7");

describe("problem1", () => {
  test("case1", () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });

  test("case2", () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });

  test("case3", () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });
  test("case4 숫자가 아닐때, ", () => {
    expect(problem1(["123", 102], [211, 212])).toEqual(-1);
  });
  const case5 = [
    [
      [0, 1],
      [211, 212],
    ],
  ];
  test.each(case5)("case5 시작 면이 들어있을때", (arr) => {
    const [a, b] = arr;
    expect(problem1(a, b)).toEqual(-1);
  });
  const case6 = [
    [
      [399, 400],
      [1, 2],
    ],
    [
      [1, 2],
      [399, 400],
    ],
  ];
  test.each(case6)("case6 마지막 면이 들어있을때", (arr) => {
    const [a, b] = arr;
    expect(problem1(a, b)).toEqual(-1);
  });
  const case7 = [
    [
      [356, 355],
      [1, 2],
    ],
    [
      [357, 355],
      [1, 2],
    ],
  ];
  test.each(case7)("case7 페이지 값이 반대로 들어있을때", (arr) => {
    const [a, b] = arr;
    expect(problem1(a, b)).toEqual(-1);
  });
  const case8 = [
    [
      [355, 356, 357],
      [1, 2],
    ],
    [[357], [1, 2]],
    [
      [[], 2],
      [1, 2],
    ],
    [
      [{}, 2],
      [1, 2],
    ],
  ];
  test.each(case8)("case8 입력값이 잘못되었을때", (arr) => {
    const [a, b] = arr;
    expect(problem1(a, b)).toEqual(-1);
  });
});

describe("problem2", () => {
  test("case1", () => {
    expect(problem2("browoanoommnaon")).toEqual("brown");
  });
  test("case2", () => {
    expect(problem2("zyelleyz")).toEqual("");
  });
});

describe("problem3", () => {
  test("case1", () => {
    expect(problem3(13)).toEqual(4);
  });
  test("case2", () => {
    expect(problem3(33)).toEqual(14);
  });
});

describe("problem4", () => {
  test("case1", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });
});

describe("problem5", () => {
  test("case1", () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test("case2", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
});

describe("problem6", () => {
  test("case1", () => {
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

describe("problem7", () => {
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
