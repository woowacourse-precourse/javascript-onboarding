const problem2 = require("../src/problem2");

describe("problem2: 암호해독(연속된 중복 문자열 제거)", () => {
  test("case1: 재귀로 일부 지워진다.", () => {
    expect(problem2("browoanoommnaon")).toEqual("brown");
  });
  test("case2: 재귀로 전부 지워진다.", () => {
    expect(problem2("zyelleyz")).toEqual("");
  });
  test("case3: 아무것도 지워지지 않는다.", () => {
    expect(problem2("abcdefg")).toEqual("abcdefg");
  });
  test("case4: 맨 앞 또는 맨 뒤에서 한번 지워진다.", () => {
    expect(problem2("aabcdefg")).toEqual("bcdefg");
    expect(problem2("abcdefgg")).toEqual("abcdef");
  });
  test("case5: 3개 이상이 연속되는 사례", () => {
    expect(problem2("abcccdefg")).toEqual("abdefg");
    expect(problem2("aaabcdef")).toEqual("bcdef");
    expect(problem2("abcdeffff")).toEqual("abcde");
  });
  test("case6: 3개 이상이 연속되는 사례 + 재귀", () => {
    expect(problem2("abecccebfg")).toEqual("afg");
    expect(problem2("cbaaabcdef")).toEqual("def");
  });
  test("case7: 한번에 한 스텝씩만 지우는 지 확인", () => {
    expect(problem2("abbaa")).toEqual("a");
  });
});
