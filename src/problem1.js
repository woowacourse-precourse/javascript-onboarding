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

  getMaxScore(getScoreList(pobi));
  getMaxScore(getScoreList(crong));
}

problem1([131, 132], [211, 212]);
// module.exports = problem1;
