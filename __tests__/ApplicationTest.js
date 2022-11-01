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

  // JS
  // 예외사항 및 테스트 추가
  test("case4", () => {
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
  });

  test("case5", () => {
    expect(problem1([399, 400], [211, 212])).toEqual(1);
  });

  test("case6", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test("case7", () => {
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

  // JS
  // 예외사항 및 테스트 추가
  test("case3", () => {
    expect(problem2("zyellleyz")).toEqual("");
  });

  test("case4", () => {
    expect(problem2("zyalllelyz")).toEqual("zyaelyz");
  });

  test("case4", () => {
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
});

describe("problem4", () => {
  test("case1", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });

  //JS

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
});

// describe("problem7", () => {
//   test("case1", () => {
//     expect(
//       problem7(
//         "mrko",
//         [
//           ["donut", "andole"],
//           ["donut", "jun"],
//           ["donut", "mrko"],
//           ["shakevan", "andole"],
//           ["shakevan", "jun"],
//           ["shakevan", "mrko"],
//         ],
//         ["bedi", "bedi", "donut", "bedi", "shakevan"]
//       )
//     ).toEqual(["andole", "jun", "bedi"]);
//   });
// });

// test 추가
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
        "Walter",
        [
          ["Christa", "Alyce"],
          ["Hobart", "Retha"],
          ["Elijah", "Josh"],
          ["Cecil", "Lamont"],
          ["Eliza", "Lamont"],
          ["Austyn", "Retha"],
          ["Retha", "Mara"],
          ["Walter", "Lamont"],
          ["Retha", "Walter"],
          ["Urban", "Walter"],
        ],
        ["Cecil", "Eliza", "Adonis", "Mara"]
      )
    ).toEqual(["Cecil", "Eliza", "Mara", "Austyn", "Hobart"]);
  });
  test("case3", () => {
    expect(
      problem7(
        "Eliza",
        [
          ["Cecil", "Hobart"],
          ["Austyn", "Mara"],
          ["Adonis", "Eliza"],
          ["Lamont", "Retha"],
          ["Jan", "Christa"],
          ["Milton", "Retha"],
          ["Josh", "Eliza"],
          ["Eliza", "Jesus"],
          ["Retha", "Eliza"],
        ],
        ["Retha", "Rosalia", "Hobart", "Jayne"]
      )
    ).toEqual(["Lamont", "Milton", "Hobart", "Jayne", "Rosalia"]);
  });
  test("case4", () => {
    expect(
      problem7(
        "Adonis",
        [
          ["Kali", "Kali"],
          ["Walter", "Urban"],
          ["Adonis", "Mara"],
          ["Eliza", "Lamont"],
          ["Josh", "Milton"],
          ["Jayne", "Elijah"],
          ["Jan", "Urban"],
          ["Urban", "Adonis"],
          ["Adonis", "Christa"],
          ["Retha", "Adonis"],
        ],
        ["Rosalia", "Elijah", "Lamont", "Cecil"]
      )
    ).toEqual(["Jan", "Walter", "Cecil", "Elijah", "Lamont"]);
  });
  test("case5", () => {
    expect(
      problem7(
        "Jan",
        [
          ["Lamont", "Christa"],
          ["Mara", "Mara"],
          ["Kali", "Adonis"],
          ["Urban", "Lamont"],
          ["Jesus", "Austyn"],
          ["Rosalia", "Alyce"],
          ["Jan", "Rosalia"],
          ["Jayne", "Jan"],
          ["Jan", "Adonis"],
          ["Josh", "Jan"],
        ],
        ["Adonis", "Cecil", "Adonis", "Eliza", "Josh", "Urban"]
      )
    ).toEqual(["Alyce", "Kali", "Cecil", "Eliza", "Urban"]);
  });
});
