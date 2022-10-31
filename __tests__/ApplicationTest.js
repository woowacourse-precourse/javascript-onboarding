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
    expect(problem1([211, 212], [131, 132])).toEqual(2);
  });

  test("case5", () => {
    expect(problem1([0, 1], [211, 212])).toEqual(-1);
  });

  test("case6", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test("case7", () => {
    expect(problem1([99, 100], [211, 212])).toEqual(1);
  });

  test("case8", () => {
    expect(problem1(["a", "b"], [211, 212])).toEqual(-1);
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
    expect(problem2("zyelllleyz")).toEqual("");
  });
  test("case4", () => {
    expect(problem2("zyelllllll")).toEqual("zye");
  });
  test("case5", () => {
    expect(problem2("l")).toEqual("l");
  });
  test("case6", () => {
    expect(problem2("l".repeat(1000))).toEqual("");
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
    expect(problem3(1)).toEqual(0);
  });
  test("case4", () => {
    expect(problem3(10)).toEqual(3);
  });
  test("case5", () => {
    expect(problem3(100)).toEqual(60);
  });
  test("case6", () => {
    expect(problem3(1000)).toEqual(900);
  });
  test("case7", () => {
    expect(problem3(10000)).toEqual(12000);
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
    expect(problem4("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual(
      "ZYXWVUTSRQPONMLKJIHGFEDCBA"
    );
  });
  test("case1", () => {
    expect(problem4("가나다라  !@#$^%&*")).toEqual("가나다라  !@#$^%&*");
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
    expect(problem5(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
  });
  test("case4", () => {
    expect(problem5(1_000_000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
  test("case5", () => {
    expect(problem5(999_999)).toEqual([19, 4, 1, 4, 1, 4, 1, 4, 9]);
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
  test("case2", () => {
    expect(
      problem6([
        ["jm@email.com", "제엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
    ).toEqual([
      "jason@email.com",
      "jm@email.com",
      "mj@email.com",
      "nowm@email.com",
    ]);
  });
  test("case3", () => {
    expect(
      problem6([
        ["a@email.com", "가"],
        ["b@email.com", "나"],
        ["c@email.com", "다"],
        ["d@email.com", "라"],
        ["e@email.com", "마"],
        ["f@email.com", "바"],
      ])
    ).toEqual([]);
  });
  test("case4", () => {
    expect(
      problem6([
        ["a@email.com", "가"],
        ["e@email.com", "가나"],
        ["d@email.com", "가나다"],
        ["c@email.com", "가나다라"],
        ["b@email.com", "가나다라마"],
      ])
    ).toEqual(["b@email.com", "c@email.com", "d@email.com", "e@email.com"]);
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
  test("case2", () => {
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
          ["bedi", "shakevan"],
          ["bedi", "donut"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["bedi", "andole", "jun"]);
  });
  test("case3", () => {
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
        []
      )
    ).toEqual(["andole", "jun"]);
  });
  test("case4", () => {
    expect(problem7("mrko", [["donut", "andole"]], [])).toEqual([]);
  });
  test("case5", () => {
    expect(
      problem7("mrko", [["donut", "andole"]], ["a", "b", "b", "c"])
    ).toEqual(["b", "a", "c"]);
  });
});
