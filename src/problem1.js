function problem1(pobi, crong) {
  const isValid = (pages) => {
    return (
      isInRange(pages) &&
      isNumber(pages) &&
      isLeftOdd(pages) &&
      isContinious(pages)
    );
  };
  const isInRange = ([firstPage, secondPage]) => {
    return (
      firstPage > 0 && firstPage <= 400 && secondPage > 0 && secondPage <= 400
    );
  };
  const isNumber = ([firstPage, secondPage]) => {
    return typeof firstPage === 'number' && typeof secondPage === 'number';
  };
  const isLeftOdd = ([fisrtPage]) => {
    return fisrtPage % 2 === 1;
  };
  const isContinious = ([firstPage, secondPage]) => {
    return secondPage === firstPage + 1;
  };
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

  if (!(isValid(pobi) && isValid(crong))) {
    return -1;
  }

  const pobiMaxScore = getMaxScore(getScoreList(pobi));
  const crongMaxScore = getMaxScore(getScoreList(crong));

  return compareScores(pobiMaxScore, crongMaxScore);
}

problem1([99, 102], [211, 212]);
// module.exports = problem1;
