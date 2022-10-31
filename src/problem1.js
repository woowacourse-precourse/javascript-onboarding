function problem1(pobi, crong) {
  let answer;

  const biggestNum = (score) => {
    const scoreString = score.toString().split("");

    let sumScore = 0;
    let multiplyScore = 1;

    scoreString.forEach((element) => {
      sumScore += parseInt(element);
      multiplyScore *= parseInt(element);
    });

    const maxValue = Math.max(sumScore, multiplyScore);

    return maxValue;
  };

  const calcMaxValue = (bookPage) => {
    if (bookPage[1] - bookPage[0] !== 1) {
      return -1;
    }
    let maximum = -1;

    bookPage.forEach((page) => {
      const result = biggestNum(page);
      if (result > maximum) {
        maximum = result;
      }
    });

    return maximum;
  };

  const pobiScore = calcMaxValue(pobi);
  const crongScore = calcMaxValue(crong);

  if (pobiScore === -1 || crongScore === -1) {
    answer = -1;
  } else if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else [(answer = 0)];

  return answer;
}

module.exports = problem1;
