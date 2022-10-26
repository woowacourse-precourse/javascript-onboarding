function problem3(number) {
  let array = [];
  let answer = 0;

  for (let i = 1; i < number + 1; i++) {
    let targetNumber = i;
    while (targetNumber) {
      if (targetNumber % 10 !== 0) array.push(targetNumber % 10);
      targetNumber = Math.floor(targetNumber / 10);
    }
    console.log(array);
    array.forEach((value) => {
      if (value !== 0 && value % 3 === 0) answer++;
    });
    array = [];
  }

  console.log(answer);
  return answer;
}

problem3(13);
problem3(33);

module.exports = problem3;

/*
  describe("problem3", () => {
    test("case1", () => {
      expect(problem3(13)).toEqual(4);
    });
    test("case2", () => {
      expect(problem3(33)).toEqual(14);
    });
  });
*/
