function problem1(pobi, crong) {
  const getScoreList = ([firstPage, secondPage]) => {
    return [
      getScore(firstPage, multiplyCallback),
      getScore(firstPage, addCallback),
      getScore(secondPage, multiplyCallback),
      getScore(secondPage, addCallback),
    ];
  };
  const getScore = (page, calculateCallback) => {
    return getDigitNumberList(page).reduce(calculateCallback);
  };
  const getDigitNumberList = (page) => [...String(page)];
  const multiplyCallback = (acc, cur) => Number(cur) * Number(acc);
  const addCallback = (acc, cur) => Number(cur) + Number(acc);
  const getMaxScore = (scores) => {
    return scores.reduce((acc, cur) => Math.max(acc, cur));
  };
  const compareScores = (oneScore, anotherScore) => {
    if (oneScore > anotherScore) {
      return 1;
    }
    if (oneScore < anotherScore) {
      return -1;
    }
    return 0;
  };

  const pobiMaxScore = getMaxScore(getScoreList(pobi));
  const crongMaxScore = getMaxScore(getScoreList(crong));

  return compareScores(pobiMaxScore, crongMaxScore);
}

problem1([99, 102], [211, 212]);
// module.exports = problem1;
