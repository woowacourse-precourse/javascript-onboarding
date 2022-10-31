function problem1(pobi, crong) {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const getIsInvalidPage = (leftPage, rightPage) => {
    return rightPage - leftPage !== 1;
  };

  if (getIsInvalidPage(pobiLeftPage, pobiRightPage)) return -1;
  if (getIsInvalidPage(crongLeftPage, crongRightPage)) return -1;

  const getSum = (page) => {
    return page
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);
  };

  const getMultiplication = (page) => {
    return page
      .toString()
      .split('')
      .reduce((acc, cur) => acc * Number(cur), 1);
  };

  const pobiScore = Math.max(
    getSum(pobiLeftPage),
    getSum(pobiRightPage),
    getMultiplication(pobiLeftPage),
    getMultiplication(pobiRightPage)
  );

  const crongScore = Math.max(
    getSum(crongLeftPage),
    getSum(crongRightPage),
    getMultiplication(crongLeftPage),
    getMultiplication(crongRightPage)
  );

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  return 0;
}

module.exports = problem1;
