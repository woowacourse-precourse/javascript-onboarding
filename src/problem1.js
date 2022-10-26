function getMaxScore(pageNumbers) {
  return Math.max(getMaxSum(pageNumbers), getMaxMultiplication(pageNumbers));
}

function getMaxSum(pageNumbers) {
  const sums = pageNumbers.map((pn) => getSum(pn));

  return Math.max(...sums);
}

function getSum(pageNumber) {
  const numbers = `${pageNumber}`.split('').map((pn) => parseInt(pn, 10));

  return numbers.reduce((prevSum, number) => prevSum + number, 0);
}

function problem1(pobi, crong) {
  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  /**
   * TODO: 예외 처리
   * if (예외) return -1;
   */

  if (pobiScore > crongScore) {
    return 1;
  }

  if (pobiScore < crongScore) {
    return 2;
  }

  return 0;
}

module.exports = problem1;
