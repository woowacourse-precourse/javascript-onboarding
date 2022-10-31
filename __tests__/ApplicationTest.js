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
  test("연속하지 않은 페이지", () => {
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
  });
  test("범위를 벗어난 페이지", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });
  test("음수 페이지", () => {
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
  test('해독 순서 확인', () => {
    expect(problem2('abbaa')).toEqual('a');
  });
  test('3개 이상 반복(1)', () => {
    expect(problem2('zyaaalllelyz')).toEqual('zyelyz');
  });
  test('3개 이상 반복(2)', () => {
    expect(problem2('pobbbciiiicbi')).toEqual('pobi');
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
  test('이모지 및 특수문자', () => {
    expect(problem4('This is Good!!!👍')).toEqual('Gsrh rh Tllw!!!👍');
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
  test('주소에 특수문자', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jm.dev@email.com', '제이슨'],
        ['mj@email.com', '엠제이'],
      ])
    ).toEqual(['jm@email.com', 'jm.dev@email.com', 'mj@email.com']);
  });
  test('이메일 중복', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['mj@email.com', '제이슨'],
        ['mj@email.com', '엠제이'],
        ['jm@email.com', '브이엠'],
        ['en@email.com', '다이슨'],
        ['jm@email.com', '이브이'],
      ])
    ).toEqual(['en@email.com', 'jm@email.com', 'mj@email.com']);
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
  test('friends의 길이가 1인 경우', () => {
    expect(problem7('mrko', [['donut', 'andole']], [])).toEqual([]);
  });
  test('visitors의 길이가 0인 경우', () => {
    expect(
      problem7(
        'mrko',
        [
          ['donut', 'andole'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        []
      )
    ).toEqual(['andole', 'jun']);
  });
  test('5명까지 출력', () => {
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
          ['atom', 'jun'],
        ],
        ['donut', 'mrko', 'yura', 'cruella']
      )
    ).toEqual(['donut', 'atom', 'bedi', 'cruella', 'mrko']);
  });
  test('같은 점수는 정렬해서 출력', () => {
    expect(problem7('mrko', [['mrko', 'jun']], ['shakevan', 'andole', 'donut', 'bedi'])).toEqual([
      'andole',
      'bedi',
      'donut',
      'shakevan',
    ]);
  });
  test('user의 친구가 없음', () => {
    expect(
      problem7(
        'yura',
        [
          ['andole', 'jun'],
          ['andole', 'bedi'],
          ['jun', 'shakevan'],
          ['jun', 'kane'],
          ['jun', 'spoon'],
          ['bedi', 'shakevan'],
          ['bedi', 'atom'],
          ['bedi', 'spoon'],
          ['atom', 'mrko'],
        ],
        ['donut', 'atom', 'mrko', 'mrko', 'spoon']
      )
    ).toEqual(['mrko', 'atom', 'donut', 'spoon']);
  });
});
