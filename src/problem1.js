const START_PAGE_NUMBER = 1;
const END_PAGE_NUMBER = 400;

function isInvalidPageNumbers(pageNumbers) {
  switch (true) {
    case isOutOfBound(pageNumbers):
      return true;
    case isImpossiblePage(pageNumbers):
      return true;
    case hasBoundaryPageNumber(pageNumbers):
      return true;
    default:
      return false;
  }
}

function isOutOfBound(pageNumbers) {
  return pageNumbers.some(
    (pn) => pn < START_PAGE_NUMBER || pn > END_PAGE_NUMBER,
  );
}

function isImpossiblePage(pageNumbers) {
  const [leftPageNumber, rightPageNumber] = pageNumbers;

  return (
    leftPageNumber % 2 !== 1 ||
    rightPageNumber % 2 !== 0 ||
    leftPageNumber + 1 !== rightPageNumber
  );
}

function hasBoundaryPageNumber(pageNumbers) {
  return (
    pageNumbers.includes(START_PAGE_NUMBER) ||
    pageNumbers.includes(END_PAGE_NUMBER)
  );
}

function getMaxScore(pageNumbers) {
  return Math.max(getMaxSum(pageNumbers), getMaxMultiplication(pageNumbers));
}

function getMaxSum(pageNumbers) {
  const sums = pageNumbers.map((pn) => getSum(pn));

  return Math.max(...sums);
}

function getSum(pageNumber) {
  const digits = `${pageNumber}`.split('').map((pn) => parseInt(pn, 10));

  return digits.reduce((prevSum, digit) => prevSum + digit, 0);
}

function getMaxMultiplication(pageNumbers) {
  const multiplications = pageNumbers.map((pn) => getMultiplication(pn));

  return Math.max(...multiplications);
}

function getMultiplication(pageNumber) {
  const digits = `${pageNumber}`.split('').map((pn) => parseInt(pn, 10));

  return digits.reduce(
    (prevMultiplication, digit) => prevMultiplication * digit,
    1,
  );
}

function getWinner(pobiScore, crongScore) {
  if (pobiScore > crongScore) {
    return 1;
  }

  if (pobiScore < crongScore) {
    return 2;
  }

  return 0;
}

function problem1(pobi, crong) {
  if (isInvalidPageNumbers(pobi) || isInvalidPageNumbers(crong)) {
    return -1;
  }

  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  return getWinner(pobiScore, crongScore);
}

module.exports = problem1;
