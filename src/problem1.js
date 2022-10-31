const FIRST_PAGE_NUMBER = 1;
const LAST_PAGE_NUMBER = 400;

function isInvalidPageNumbers(pageNumbers) {
  switch (true) {
    case isOutOfBound(pageNumbers):
      return true;
    case isImpossiblePage(pageNumbers):
      return true;
    case isBoundaryPage(pageNumbers):
      return true;
    default:
      return false;
  }
}

function isOutOfBound(pageNumbers) {
  return pageNumbers.some(
    (pn) => pn < FIRST_PAGE_NUMBER || pn > LAST_PAGE_NUMBER,
  );
}

function isImpossiblePage([leftPageNumber, rightPageNumber]) {
  return (
    leftPageNumber % 2 !== 1 ||
    rightPageNumber % 2 !== 0 ||
    leftPageNumber + 1 !== rightPageNumber
  );
}

function isBoundaryPage(pageNumbers) {
  return (
    pageNumbers.includes(FIRST_PAGE_NUMBER) ||
    pageNumbers.includes(LAST_PAGE_NUMBER)
  );
}

function getWinner(pobiScore, crongScore) {
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;

  switch (true) {
    case pobiScore > crongScore:
      return POBI_WIN;
    case crongScore > pobiScore:
      return CRONG_WIN;
    default:
      return DRAW;
  }
}

function calcMaxScore(pageNumbers) {
  return Math.max(
    ...pageNumbers.map(calcSum),
    ...pageNumbers.map(calcMultiplication),
  );
}

function calcSum(pageNumber) {
  return `${pageNumber}`.split('').reduce((prev, cur) => prev + +cur, 0);
}

function calcMultiplication(pageNumber) {
  return `${pageNumber}`.split('').reduce((prev, cur) => prev * +cur, 1);
}

function problem1(pobi, crong) {
  const EXCEPTION = -1;

  if (isInvalidPageNumbers(pobi) || isInvalidPageNumbers(crong)) {
    return EXCEPTION;
  }

  const answer = getWinner(calcMaxScore(pobi), calcMaxScore(crong));

  return answer;
}

module.exports = problem1;
