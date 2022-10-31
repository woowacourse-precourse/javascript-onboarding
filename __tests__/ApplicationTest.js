/*
** 특정 문제만 테스트 하는 명령어
npm test -- -t problemN
*/

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
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
  });

  test("case5", () => {
    expect(problem1([399, 400], [211, 212])).toEqual(-1);
  });

  test("case6", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test("case7", () => {
    expect(problem1([99, 100], [-1, 0])).toEqual(-1);
  });
  /*
  // Exception Test
  // 시작 면
  test("exception test1", () => {
    expect(problem1([1, 2], [211, 212])).toEqual(-1);
  });
  // 마지막 면
  test("exception test2", () => {
    expect(problem1([99, 100], [399, 400])).toEqual(-1);
  });
  // 홀짝 안맞음
  test("exception test3", () => {
    expect(problem1([100, 101], [397, 398])).toEqual(-1);
  });
  // 이상한 페이지 입력
  test("exception test4", () => {
    expect(problem1([11, 101], [3, 4])).toEqual(-1);
  });
  */
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
        "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"
      )
    ).toEqual(
      "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"
    );
  });
  test("case4", () => {
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
  /*
  test("my test1", () => {
    expect(problem2("aaaaaaaa")).toEqual("");
  });
  test("my test2", () => {
    expect(problem2("aaaaaaaabbb")).toEqual("");
  });
  */
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
  /*
  test("my test1", () => {
    expect(problem3(39)).toEqual(22);
  });
  test("my test2", () => {
    expect(problem3(100)).toEqual(60);
  });
  test("my test3", () => {
    expect(problem3(399)).toEqual(340);
  });
  test("my test4", () => {
    expect(problem3(1000)).toEqual(900);
  });
  test("my test5", () => {
    expect(problem3(10000)).toEqual(12000);
  });
  test("my test6", () => {
    expect(problem3(1)).toEqual(0);
  });
  */
});

describe("problem4", () => {
  test("case1", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });
  test("case2", () => {
    expect(problem4("Hello  Everyone!")).toEqual("Svool  Veviblmv!");
  });
  test("case3", () => {
    expect(problem4("abcdefghijklmnopqrstuvwxyz")).toEqual(
      "zyxwvutsrqponmlkjihgfedcba"
    );
  });
  test("case4", () => {
    expect(problem4("abcdefghijklmnopqrstuvwxyz !@#!#  ")).toEqual(
      "zyxwvutsrqponmlkjihgfedcba !@#!#  "
    );
  });
  /*
  test("my test1", () => {
    expect(problem4("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual(
      "ZYXWVUTSRQPONMLKJIHGFEDCBA"
    );
  });
  test("my test2", () => {
    expect(problem4("abcdefghijklmnopqrstuvwxyz")).toEqual(
      "zyxwvutsrqponmlkjihgfedcba"
    );
  });
  test("my test3", () => {
    expect(problem4("기억abcdeFG hijkl^^mnop qrstuv wxYz")).toEqual(
      "기억zyxwvUT srqpo^^nmlk jihgfe dcBa"
    );
  });
  */
});

describe("problem5", () => {
  test("case1", () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });
  test("case2", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
  /*
  test("my test1", () => {
    expect(problem5(1000000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
  test("my test2", () => {
    expect(problem5(0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
  test("my test3", () => {
    expect(problem5(9)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 9]);
  });
  test("my test4", () => {
    expect(problem5(999999)).toEqual([19, 4, 1, 4, 1, 4, 1, 4, 9]);
  });
  */
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
  /*
  test("my test1", () => {
    expect(
      problem6([
        ["happy@email.com", "해피한"],
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["nora@email.com", "노라워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
        ["woniee@email.com", "워니"],
        ["happyday@email.com", "해피한날"],
      ])
    ).toEqual([
      "happy@email.com",
      "happyday@email.com",
      "jason@email.com",
      "jm@email.com",
      "mj@email.com",
      "nora@email.com",
      "woniee@email.com",
    ]);
  });
  */
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
    // score: (andole:20 | jun:20 | bedi:3)
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
  /*
  test("my test1", () => {
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
        ["bedi", "jun", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["jun", "andole", "bedi"]);
    // score: (jun:21 | andole:20 | bedi:3)
  });
  test("my test2", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "jun", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "jun", "bedi"]);
    // score: (andole:20 | jun:11 | bedi:3)
  });
  test("my test3", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "mrko"],
          ["shakevan", "bedi"],
        ],
        ["bedi", "jun", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "bedi", "jun"]);
    // score: (andole:20 | bedi:13 | jun:10)
  });
  */
});
