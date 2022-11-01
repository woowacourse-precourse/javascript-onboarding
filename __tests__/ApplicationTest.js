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
  test("왼쪽 페이지가 홀수이어야 한다.", () => {
    expect(problem1([98, 99], [193, 194])).toEqual(-1);
    expect(problem1([99, 100], [196, 197])).toEqual(-1);
  });
  test("시작면, 마지막면 제외", () => {
    expect(problem1([0, 99], [193, 194])).toEqual(-1);
    expect(problem1([99, 100], [399, 400])).toEqual(-1);
  });
  test("범위를 벗어난 페이지", () => {
    expect(problem1([-1, 0], [193, 194])).toEqual(-1);
    expect(problem1([99, 100], [401, 402])).toEqual(-1);
  });
  test("예외 처리 통합", () => {
    expect(problem1([98, 99], [1, 2])).toEqual(-1);
    expect(problem1([399, 400], [401, 402])).toEqual(-1);
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
    expect(problem2("zyalllelyz")).toEqual("zyaelyz");
  });

  test("case4", () => {
    expect(problem2("aabba")).toEqual("a");
  });
  test("case5", () => {
    expect(
      problem2(
        "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"
      )
    ).toEqual(
      "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"
    );
  });

  test("case6", () => {
    expect(
      problem2(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      )
    ).toEqual("");
  });
  test("case7", () => {
    expect(problem2("aazzqweqweaaq")).toEqual("qweqweq");
  });

  test("case8", () => {
    expect(problem2("ksekkset")).toEqual("kseset");
  });

  test("case9", () => {
    expect(problem2("a")).toEqual("a");
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

  test("case5", () => {
    expect(problem4("ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*  ")).toEqual(
      "ZYXWVUTSRQPONMLKJIHGFEDCBA !@#$%^&*  "
    );
  });

  test("case6", () => {
    expect(problem4("Svool, Dliow! 123")).toEqual(
      "Hello, World! 123"
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

  test("case3", () => {
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


  const makeName = (index) => {
    return Array(30)
      .fill()
      .map((_, chIndex) => 'az'[index & (1 << chIndex) ? 1 : 0])
      .join('');
  };
  const user = "mrko";

  test("case4", () => {
    expect(
      problem7(
        user,
        [
          ...Array(5000).fill().map((_, index) => [user, makeName(index)]), // 0~4999까지 친구
          ...Array(5000).fill().map((_, index) => [makeName(index), makeName(5000 + index)]), // 5000~9999까지 친구의 친구
        ],
        [
          // 5066, 5067, 5068, 5069, 5070 순서대로 많이 방문
          ...Array(4000).fill(5066),
          ...Array(3000).fill(5067),
          ...Array(2000).fill(5068),
          ...Array(800).fill(5069),
          ...Array(200).fill(5070),
        ].map(makeName),
      )
    ).toEqual([5066, 5067, 5068, 5069, 5070].map(makeName));
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
  test('case2', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
      ),
    ).toEqual(['andole', 'bedi']);
  });
  test('case3', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['jun', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
      ),
    ).toEqual(['andole', 'bedi']);
  });
  test('case4', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['bedi', 'jun'],
          ['bedi', 'donut'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['jun', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['donut', 'shakevan'],
      ),
    ).toEqual(['andole', 'bedi']);
  });
  test('case5', () => {
    expect(
      problem7(
        'andole',
        [
          ['andole', 'jun'],
          ['donut', 'jun'],
          ['donut', 'shakevan'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'bedi'],
          ['anne', 'jun'],
        ],
        ['donut', 'mrko', 'peter', 'sam'],
      ),
    ).toEqual(['donut', 'anne', 'bedi', 'mrko', 'peter']);
  });
  test('case6', () => {
    expect(
      problem7(
        'hello',
        [
          ['andole', 'jun'],
          ['andole', 'bedi'],
          ['jun', 'shakevan'],
          ['jun', 'kane'],
          ['jun', 'sam'],
          ['bedi', 'shakevan'],
          ['bedi', 'anne'],
          ['bedi', 'sam'],
          ['anne', 'mrko'],
        ],
        ['donut', 'anne', 'mrko', 'mrko', 'sam'],
      ),
    ).toEqual(['mrko', 'anne', 'donut', 'sam']);
  });
});
