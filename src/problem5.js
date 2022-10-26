function problem5(money) {
  const filter = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];

  let target = money;
  filter.reduce((acc, cur, index) => {
    console.log(acc, cur, index);
    if (acc / cur >= 1) {
      answer.push(Math.floor(acc / cur));
      return (acc = acc % cur);
    } else {
      answer.push(0);
      return acc;
    }
  }, target);

  console.log(answer);
  return answer;
}

problem5(50237);
problem5(15000);

module.exports = problem5;

/* test cases
  describe("problem5", () => {
    test("case1", () => {
      expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
    });

    test("case2", () => {
      expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
    });
  });
*/
