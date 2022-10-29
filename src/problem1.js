function problem1(pobi, crong) {
  const handleException = (pages) => {
    const leftPage = pages[0];
    const rightPage = pages[1];
    if (!Number.isInteger(leftPage) || !Number.isInteger(rightPage)) return true;
    if (rightPage - leftPage !== 1) return true;
    if (leftPage <= 1 || rightPage >= 400) return true;
    if (leftPage % 2 !== 1 || rightPage % 2 !== 0) return true;
    return false;
  };

  const getMaxScore = (pages) => {
    const singleDigitsOfBothPages = pages.map((page) =>
      page
        .toString()
        .split('')
        .map((singleDigit) => +singleDigit),
    );

    const scores = [];
    singleDigitsOfBothPages.forEach((singleDigitsOfOnePage) => {
      scores.push(
        singleDigitsOfOnePage.reduce((prev, curr) => prev + curr),
        singleDigitsOfOnePage.reduce((prev, curr) => prev * curr),
      );
    });
    return Math.max(...scores);
  };

  if (handleException(pobi) || handleException(crong)) return -1;

  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return -1;
}

module.exports = problem1;
