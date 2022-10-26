function problem1(pobi, crong) {
  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

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
}

module.exports = problem1;
