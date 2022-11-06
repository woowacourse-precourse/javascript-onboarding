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
    expect(problem1([99, 100], [399, 400])).toEqual(-1);
  });

  test("case6", () => {
    expect(problem1([121, 122], [211, 212])).toEqual(0);
  });

  test("case7", () => {
    expect(problem1([121, 122, 123], [211, 212])).toEqual(-1);
  });
  test("case8", () => {
    expect(problem1([121, 122], [212])).toEqual(-1);
  });
  test("case9", () => {
    expect(problem1([122, 121], [211, 212])).toEqual(-1);
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
    expect(problem2("zyellleyz")).toEqual("");
  });

  test("case4", () => {
    expect(problem2("zyalllelyz")).toEqual("zyaelyz");
  });

  test("case5", () => {
    expect(problem2("aabba")).toEqual("a");
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
    expect(problem3(333)).toEqual(228);
  });
  test("case4", () => {
    expect(problem3(2)).toEqual(0);
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

  test("case4", () => {
    expect(problem4("Hello  Everyone!")).toEqual("Svool  Veviblmv!");
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
          ["mrko", "jun"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "bedi"]);
  });

  test("case3", () => {
    expect(
      problem7(
        "mrko",
        [
          ["mrko", "jun"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["jun", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "bedi"]);
  });

  test("case4", () => {
    expect(
      problem7(
        "mrko",
        [
          ["mrko", "jun"],
          ["bedi", "jun"],
          ["bedi", "donut"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["jun", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["donut", "shakevan"]
      )
    ).toEqual(["andole", "bedi"]);
  });

  test("case5", () => {
    expect(
      problem7(
        "andole",
        [
          ["andole", "jun"],
          ["donut", "jun"],
          ["donut", "shakevan"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "bedi"],
          ["anne", "jun"],
        ],
        ["donut", "mrko", "peter", "sam"]
      )
    ).toEqual(["donut", "anne", "bedi", "mrko", "peter"]);
  });

  test("case6", () => {
    expect(
      problem7(
        "hello",
        [
          ["andole", "jun"],
          ["andole", "bedi"],
          ["jun", "shakevan"],
          ["jun", "kane"],
          ["jun", "sam"],
          ["bedi", "shakevan"],
          ["bedi", "anne"],
          ["bedi", "sam"],
          ["anne", "mrko"],
        ],
        ["donut", "anne", "mrko", "mrko", "sam"]
      )
    ).toEqual(["mrko", "anne", "donut", "sam"]);
  });

  test("case7", () => {
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

  test("case8", () => {
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
});
