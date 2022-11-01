function problem1(pobi, crong) {
  const MIN_PAGE = 1;
  const MAX_PAGE = 400;

  const isValid = (pages) => {
    return (
      isInValidRange(pages) &&
      isNumberType(pages) &&
      isLeftPageOdd(pages) &&
      isConsecutivePages(pages)
    );
  };

  const isInValidRange = ([leftPage, rightPage]) => {
    return (
      leftPage >= MIN_PAGE && leftPage <= MAX_PAGE && rightPage > MIN_PAGE && rightPage <= MAX_PAGE
    );
  };

  const isNumberType = ([leftPage, rightPage]) => {
    return typeof leftPage === 'number' && typeof rightPage === 'number';
  };

  const isLeftPageOdd = ([leftPage]) => {
    return leftPage % 2 === 1;
  };

  const isConsecutivePages = ([leftPage, rightPage]) => {
    return rightPage === leftPage + 1;
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
    return getEachDigitList(page).reduce(calculateCallback);
  };

  const getEachDigitList = (page) => [...String(page)];

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
      return 2;
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

module.exports = problem1;
