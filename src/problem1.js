// 예외를 처리하는 함수 구현
// 사람별로 최대 점수를 구할수 있는 함수 구현
// 승부결과를 판단하는 함수 구현
// 구현된 함수를 사용하여 problem1 함수 구현

function checkException(pages) {
  const [left, right] = pages;
  if (
    left >= 1 &&
    left <= 399 &&
    right >= 2 &&
    right <= 400 &&
    left % 2 === 1 &&
    right % 2 === 0 &&
    right - left === 1
  ) {
    return false;
  }
  return true;
}

function maxNumber(pages) {
  const [left, right] = pages;

  const leftNumbers = String(left).split("").map(Number);
  const rightNumbers = String(right).split("").map(Number);

  const leftSum = leftNumbers.reduce((prev, cur) => prev + cur, 0);
  const leftMultiply = leftNumbers.reduce((prev, cur) => prev * cur, 1);
  const rightSum = rightNumbers.reduce((prev, cur) => prev + cur, 0);
  const rightMultiply = rightNumbers.reduce((prev, cur) => prev * cur, 1);

  return Math.max(leftSum, leftMultiply, rightSum, rightMultiply);
}

function makeMatchResult(pobi, crong) {
  const pobiScore = maxNumber(pobi);
  const crongScore = maxNumber(crong);

  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else {
    return 0;
  }
}

function problem1(pobi, crong) {
  if (checkException(pobi) || checkException(crong)) return -1;
  return makeMatchResult(pobi, crong);
}

module.exports = problem1;
