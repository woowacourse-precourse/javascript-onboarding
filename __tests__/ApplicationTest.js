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

  test("case10", () => {
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
  });

  test("case11", () => {
    expect(problem1([399, 400], [211, 212])).toEqual(-1);
  });

  test("case12", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test("case13", () => {
    expect(problem1([99, 100], [-1, 0])).toEqual(-1);
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
    expect(
      problem2(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      )
    ).toEqual("");
  });
  test("case5", () => {
    expect(problem2("aazzqweqweaaq")).toEqual("qweqweq");
  });

  test("case6", () => {
    expect(problem2("ksekkset")).toEqual("kseset");
  });

  //
  test("case7", () => {
    expect(problem2("zyellleyz")).toEqual("");
  });

  test("case8", () => {
    expect(problem2("zyalllelyz")).toEqual("zyaelyz");
  });

  test("case9", () => {
    expect(problem2("aabba")).toEqual("a");
  });
  test("case10", () => {
    expect(problem2("baooaan")).toEqual("ban");
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
    expect(problem3(35)).toEqual(16);
  });
  test("case4", () => {
    expect(problem3(333)).toEqual(228);
  });
  test("case5", () => {
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

  test("case3", () => {
    expect(problem5(1000000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
  test("case4", () => {
    expect(problem5(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
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

  test("case3", () => {
    expect(
      problem6([
        ["onepiece@email.com", "원피수"],
        ["jason@email.com", "제이슨"],
        ["onepisu@email.com", "원피수"],
        ["mj@email.com", "엠제이"],
        ["suonepi@email.com", "수원피"],
      ])
    ).toEqual([
      "jason@email.com",
      "mj@email.com",
      "onepiece@email.com",
      "onepisu@email.com",
      "suonepi@email.com",
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
        "donut",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "mrko", "bedi", "shakevan"]
      )
    ).toEqual(["shakevan", "bedi"]);
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
  test("case5", () => {
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
  test("case6", () => {
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
  test("case7", () => {
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
