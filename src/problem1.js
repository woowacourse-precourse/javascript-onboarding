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

  const pobiScore = Math.max(
    scoreCalculator(pobi[0], "+"),
    scoreCalculator(pobi[0], "*"),
    scoreCalculator(pobi[1], "+"),
    scoreCalculator(pobi[1], "*")
  );

  const crongScore = Math.max(
    scoreCalculator(crong[0], "+"),
    scoreCalculator(crong[0], "*"),
    scoreCalculator(crong[1], "+"),
    scoreCalculator(crong[1], "*")
  );

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else if (pobiScore === crongScore) answer = 0;

  return answer;
}

module.exports = problem1;
