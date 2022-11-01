const MIN_PAGE = 1;
const MAX_PAGE = 400;

const GAME_RESULT = {
  pobi: 1,
  crong: 2,
  draw: 0,
  exception: -1,
};

const sumDigit = (digits) => {
  return digits.reduce((a, b) => a + b, 0);
};

const multiplyDigit = (digits) => {
  return digits.reduce((a, b) => a * b, 1);
};

const calcMaxNumber = (pages) => {
  const pageDigits = pages.map((page) => page.toString().split("").map(Number));

  const eachPageMaxNums = pageDigits.map((pageDigit) =>
    pageDigit.includes(0)
      ? sumDigit(pageDigit)
      : Math.max(sumDigit(pageDigit), multiplyDigit(pageDigit))
  );

  return Math.max(...eachPageMaxNums);
};

const isValidPage = (pages) => {
  const [leftPage, rightPage] = pages;

  if (rightPage - leftPage !== 1) {
    return false;
  }

  if (leftPage % 2 === 0 || rightPage % 2 === 1) {
    return false;
  }

  return pages.every((page) => page > MIN_PAGE && page < MAX_PAGE);
};

const isValidPages = (...pages) => {
  return pages.every((page) => isValidPage(page));
};

const getGameResult = ({ pobiMaxNum, crongMaxNum }) => {
  const { pobi, crong, draw, exception } = GAME_RESULT;
  const score = pobiMaxNum - crongMaxNum;

  if (score > 0) {
    return pobi;
  }

  if (score < 0) {
    return crong;
  }

  if (score === 0) {
    return draw;
  }

  return exception;
};

const problem1 = (pobi, crong) => {
  const { exception } = GAME_RESULT;

  if (!isValidPages(pobi, crong)) {
    return exception;
  }

  const pobiMaxNum = calcMaxNumber(pobi);
  const crongMaxNum = calcMaxNumber(crong);

  return getGameResult({ pobiMaxNum, crongMaxNum });
};

module.exports = problem1;
