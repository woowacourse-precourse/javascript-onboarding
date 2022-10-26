function problem2(cryptogram) {
  console.log(cryptogram);

  let answer = cryptogram;
  let repeatCondition = true;

  while (repeatCondition) {
    repeatCondition = false;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === answer[i + 1]) {
        // 연속된 두 개만 삭제
        answer = answer.slice(0, i) + answer.slice(i + 2);
        repeatCondition = true;
      }
    }
  }

  console.log(answer);
  return answer;
}

problem2("browoanoommnaon");
problem2("zyelleyz");

module.exports = problem2;

/*
  describe("problem2", () => {
    test("case1", () => {
      expect(problem2("browoanoommnaon")).toEqual("brown");
    });
    test("case2", () => {
      expect(problem2("zyelleyz")).toEqual("");
    });
  });
*/
