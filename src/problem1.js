function getMaxScore(pageNumbers) {
  return Math.max(getMaxSum(pageNumbers), getMaxMultiplication(pageNumbers));
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
