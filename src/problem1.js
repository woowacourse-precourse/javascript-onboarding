function problem1(pobi, crong) {
  let answer;

  const scoreCalculator = (score, operation) => {
    return String(score)
      .split("")
      .reduce((acc, cur) => {
        if (operation === "+") return +acc + +cur;
        if (operation === "*") return +acc * +cur;
      });
  };

  return answer;
}

module.exports = problem1;
