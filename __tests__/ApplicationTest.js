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

  test("case4", () => {
    expect(problem1([99, 100], [99, 100])).toEqual(0);
  });

  test("case5", () => {
    expect(problem1([99, 100, 101], [211, 212])).toEqual(-1);
  });

  test("case6", () => {
    expect(problem1([2, 3], [199, 200])).toEqual(-1);
  });

  test("case7", () => {
    expect(problem1([1, 2], [199, 200])).toEqual(-1);
  });

  test("case8", () => {
    expect(problem1([399, 400], [199, 200])).toEqual(-1);
  });
});

describe("problem2", () => {
  test("case1", () => {
    expect(problem2("browoanoommnaon")).toEqual("brown");
  });
  test("case2", () => {
    expect(problem2("zyelleyz")).toEqual("");
  });
  test("case3", () => {
    expect(problem2("zyelleyzx")).toEqual("x");
  });
  test("case4", () => {
    expect(problem2("axzyelleyz")).toEqual("ax");
  });
  test("case5", () => {
    expect(problem2("zyealleyz")).toEqual("zyeaeyz");
  });
  test("case6", () => {
    expect(problem2("browoanboommbbbbnaon")).toEqual("browoanbnaon");
  });
});

describe("problem3", () => {
  test("case1", () => {
    expect(problem3(13)).toEqual(4);
  });
  test("case2", () => {
    expect(problem3(33)).toEqual(14);
  });
  test("case3", () => {
    expect(problem3(10000)).toEqual(12000);
  });
  test("case4", () => {
    expect(problem3(5000)).toEqual(5500);
  });
  test("case5", () => {
    expect(problem3(99)).toEqual(60);
  });
  test("case6", () => {
    expect(problem3(399)).toEqual(340);
  });
});

describe("problem4", () => {
  test("case1", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });
  test("case2", () => {
    expect(problem4("abcdefghijklmnopqrstuvwxyz")).toEqual(
      "zyxwvutsrqponmlkjihgfedcba"
    );
  });
  test("case3", () => {
    expect(problem4("abcdefghijklmnopqrstuvwxyz !@#!#  ")).toEqual(
      "zyxwvutsrqponmlkjihgfedcba !@#!#  "
    );
  });
});

describe("problem5", () => {
  test("case1", () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test("case2", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });

  test("case3", () => {
    expect(problem5(167773)).toEqual([3, 1, 1, 2, 1, 2, 1, 2, 3]);
  });

  test("case4", () => {
    expect(problem5(10000000)).toEqual([200, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test("case5", () => {
    expect(problem5(10000003)).toEqual([200, 0, 0, 0, 0, 0, 0, 0, 3]);
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
        ["nowm@nmail.com", "이제엠"],
      ])
    ).toEqual(["jason@email.com", "jm@email.com", "mj@email.com"]);
  });
});

test("case2", () => {
  expect(
    problem6([
      ["jm@email.com", "제이엠제이워니"],
      ["jason@email.com", "제이슨"],
      ["woniee@email.com", "워니"],
      ["mj@email.com", "엠제이"],
      ["nowm@email.com", "이워니"],
    ])
  ).toEqual([
    "jason@email.com",
    "jm@email.com",
    "mj@email.com",
    "nowm@email.com",
    "woniee@email.com",
  ]);
});

test("case3", () => {
  expect(
    problem6([
      ["jm@email.com", "제이엠"],
      ["jason@email.com", "제이슨"],
      ["woniee@email.com", "워니"],
      ["mj@email.com", "엠제이"],
      ["nowm@email.com", "이제엠"],
      ["jasp@email.com", "박이김"],
      ["jp@email.com", "김이박"],
      ["qpw@email.com", "김이순"],
      ["teemo@email.com", "티모"],
      ["banana@email.com", "대위티모"],
      ["secondJm@email.com", "제이엠"],
      ["apple@email.com", "땷횱봵"],
      ["stran@email.com", "횱봵으"],
      ["zebra@email.com", "두글자이상의문자가연속적으로이제맞티모"],
    ])
  ).toEqual([
    "apple@email.com",
    "banana@email.com",
    "jason@email.com",
    "jm@email.com",
    "jp@email.com",
    "mj@email.com",
    "nowm@email.com",
    "qpw@email.com",
    "secondJm@email.com",
    "stran@email.com",
    "teemo@email.com",
    "zebra@email.com",
  ]);
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