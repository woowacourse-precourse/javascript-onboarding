const problem1 = require("../src/problem1");
const problem2 = require("../src/problem2");
const problem3 = require("../src/problem3");
const problem4 = require("../src/problem4");
const problem5 = require("../src/problem5");
const problem6 = require("../src/problem6");
const problem7 = require("../src/problem7");

describe("problem1", () => {
  test("최소 페이지 1미만의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([0, 1], [197, 198])).toEqual(-1);
  });

  test("최대 페이지 400초과의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([93, 94], [401, 402])).toEqual(-1);
  });

  test("왼쪽 페이지가 홀수이어야 한다.", () => {
    expect(problem1([98, 99], [193, 194])).toEqual(-1);
    expect(problem1([99, 100], [196, 197])).toEqual(-1);
  });

  test("오른쪽 페이지가 짝수이어야 한다.", () => {
    expect(problem1([99, 100], [194, 195])).toEqual(-1);
    expect(problem1([100, 101], [193, 194])).toEqual(-1);
  });

  test("pobi와 crong의 배열 길이가 2가 아닌 경우 예외사항을 반환해야 한다.", () => {
    expect(problem1([1, 2, 3], [193, 194])).toEqual(-1);
    expect(problem1([100, 101], [20, 21, 22])).toEqual(-1);
  });

  test("시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.", () => {
    expect(problem1([undefined, 2], [193, 194])).toEqual(-1);
    expect(problem1([101, 102], [21, undefined])).toEqual(-1);
    expect(problem1([null, 102], [21, 22])).toEqual(-1);
    expect(problem1([101, 102], [21, null])).toEqual(-1);
  });

  test("페이지의 값이 정상적으로 들어오지 않으면 예외사항을 반환해야 한다.", () => {
    expect(problem1(undefined, [193, 194])).toEqual(-1);
    expect(problem1([101, 102], undefined)).toEqual(-1);
    expect(problem1(null, [21, 22])).toEqual(-1);
    expect(problem1([101, 102], null)).toEqual(-1);
    expect(problem1(null)).toEqual(-1);
    expect(problem1("정상적이지 않은 값")).toEqual(-1);
  });
});

describe("problem2", () => {
  test('cryptogram의 타입이 문자열이 아닌 경우 "Error: cryptogram의 타입이 문자열이 아닙니다."라는 문자열을 반환한다.', () => {
    expect(problem2([])).toEqual("Error: cryptogram의 타입이 문자열이 아닙니다.");
  });

  test('cryptogram은 길이가 1 이하인 경우 "Error: cryptogram의 문자열의 길이가 1이상이어야 합니다."라는 문자열을 반환한다.', () => {
    expect(problem2("")).toEqual("Error: cryptogram의 문자열의 길이가 1이상이어야 합니다.");
  });

  test('cryptogram은 길이가 1000 이상인 경우 "Error: cryptogram의 문자열의 길이가 1000이하이어야 합니다."라는 문자열을 반환한다.', () => {
    expect(problem2("a".padEnd(1001, "a"))).toEqual("Error: cryptogram의 문자열의 길이가 1000이하이어야 합니다.");
  });

  test("cryptogram은 알파벳 소문자로만 이루어져 있다. 알파벳 소문자 외에 다른 문자가 있다면 에러메세지가 담긴 문자열을 반환한다.", () => {
    expect(problem2("ABC")).toEqual("Error: cryptogram는 알파벳 소문자 외에 다른 문자가 들어오면 안됩니다.");
  });

  test("purmmnnnnaaaqqwwwwnnnnmmple은 purple을 반환해야 한다.", () => {
    expect(problem2("purmmnnnnaaaqqwwwwnnnnmmple")).toEqual("purple");
  });

  test("jeoaaabbnseaabbccdddcccaaonghun은 jeonseonghun을 반환해야 한다.", () => {
    expect(problem2("jeoaaabbnseaabbccdddcccaaonghun")).toEqual("jeonseonghun");
  });
});

describe("problem3", () => {
  test('number가 1 이상이 아닌 경우 "Error: number는 1이상이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem3(0)).toEqual("Error: number는 1이상이어야 합니다");
  });

  test('number가 10000 이하가 아닌 경우 "Error: number는 10000이하이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem3(10001)).toEqual("Error: number는 10000이하이어야 합니다");
  });

  test('number가 자연수가 아닌 경우 "Error: number는 자연수이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem3(10.123)).toEqual("Error: number는 자연수이어야 합니다");
  });
});

describe("problem4", () => {
  test('word의 길이가 1 이상이 아닌 경우 "Error: word의 길이는 1이상이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem4("")).toEqual("Error: word의 길이는 1이상이어야 합니다");
  });

  test('word의 길이가 1000 이하가 아닌 경우 "Error: word의 길이는 1000이하이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem4("a".padEnd(1001, "a"))).toEqual("Error: word의 길이는 1000이하이어야 합니다");
  });

  test("한글이 섞여있는 경우 변환하지 않고 그대로 반환해야 한다.", () => {
    expect(problem4("I love you 성훈")).toEqual("R olev blf 성훈");
  });
});

describe("problem5", () => {
  test('money가 1미만의 경우 "Error: money의 수는 1이상이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem5(0)).toEqual("Error: money의 수는 1이상이어야 합니다");
  });

  test('money가 1,000,000초과의 경우 "Error: money의 수는 1,000,000이하이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem5(1000001)).toEqual("Error: money의 수는 1,000,000이하이어야 합니다");
  });

  test('money가 자연수가 아닌 경우 "Error: money는 자연수이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem5(10.123)).toEqual("Error: money는 자연수이어야 합니다");
  });
});

describe("problem6", () => {
  test('forms의 길이가 1이상이 아닌 경우 "Error: forms의 길이가 1이상이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem6([])).toEqual("Error: forms의 길이가 1이상이어야 합니다");
  });

  test('forms의 길이가 10,000명이하가 아닌 경우 "Error: forms의 길이가 10000이하이어야 합니다"라는 문자열을 반환한다.', () => {
    expect(problem6(Array.from({ length: 10001 }))).toEqual("Error: forms의 길이가 10000이하이어야 합니다");
  });

  test('이메일은 "email.com" 도메인으로만 제한하며 "email.com" 도메인이 아닌 경우 "Error: 신청할 수 있는 이메일은 "email.com" 도메인으로만 제한된다."라는 문자열을 반환한다.', () => {
    expect(problem6(["jm@mail.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"])).toEqual(
      'Error: 신청할 수 있는 이메일은 "email.com" 도메인으로만 제한됩니다'
    );
  });
});

describe("problem7", () => {
  test("andole, bedi, jun이 동점일 때 이름순으로 정렬되어야 한다.", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["donut", "bedi"],
          ["donut", "tjdgns"],
          ["shakevan", "tjdgns"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "bedi", "bedi", "bedi", "bedi", "bedi", "bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "bedi", "jun", "tjdgns"]);
  });
});
