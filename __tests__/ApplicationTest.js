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
    expect(problem1([1, 2], [211, 212])).toEqual(-1);
  });

  test("case5", () => {
    expect(problem1([211, 212], [1, 2])).toEqual(-1);
  });

  test("case6", () => {
    expect(problem1([211, 212], [399, 400])).toEqual(-1);
  });

  test("case7", () => {
    expect(problem1([399, 400], [211, 212])).toEqual(-1);
  });

  test("case8", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test("case9", () => {
    expect(problem1([211, 212], [401, 402])).toEqual(-1);
  });

  test("case10", () => {
    expect(problem1([-1, 0], [211, 212])).toEqual(-1);
  });

  test("case11", () => {
    expect(problem1([211, 212], [-1, 0])).toEqual(-1);
  });

  test("case12", () => {
    expect(problem1([2, 3], [211, 212])).toEqual(-1);
  });

  test("case13", () => {
    expect(problem1([211, 212], [2, 3])).toEqual(-1);
  });

  test("case14", () => {
    expect(problem1([211, 212], [99, 102])).toEqual(-1);
  });

  test("case15", () => {
    expect(problem1([2, 1], [211, 212])).toEqual(-1);
  });

  test("case16", () => {
    expect(problem1([211, 212], [2, 1])).toEqual(-1);
  });

  test("case17", () => {
    expect(problem1([211, 212], [211])).toEqual(-1);
  });

  test("case18", () => {
    expect(problem1([211], [211, 212])).toEqual(-1);
  });

  test("case19", () => {
    expect(problem1([211, 212])).toEqual(-1);
  });

  test("case20", () => {
    expect(problem1([1, 1], [211, 212])).toEqual(-1);
  });

  test("case21", () => {
    expect(problem1([211, 212], [1, 1])).toEqual(-1);
  });

  test("case22", () => {
    expect(problem1([197, 198], [195, 196])).toEqual(1);
  });

  test("case23", () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
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
