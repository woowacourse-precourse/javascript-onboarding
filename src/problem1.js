function isArrayIncludesZero(nums) {
  return nums.includes(0);
}

function sumDigit(digits) {
  return digits.reduce((a, b) => a + b, 0);
}

function multiplyDigit(digits) {
  return digits.reduce((a, b) => a * b, 1);
}

function calcMaxNumber(pages) {
  const pageDigits = pages.map((page) => page.toString().split("").map(Number));

  const [leftPageMaxNum, rightPageMaxNum] = pageDigits.map((pageDigit) =>
    isArrayIncludesZero(pageDigit)
      ? sumDigit(pageDigit)
      : Math.max(sumDigit(pageDigit), multiplyDigit(pageDigit))
  );

  return Math.max(leftPageMaxNum, rightPageMaxNum);
}

function isValidPage(pages) {
  const MIN_PAGE = 1;
  const MAX_PAGE = 400;

  const [leftPage, rightPage] = pages;

  if (rightPage - leftPage !== 1) {
    return false;
  }

  if (leftPage % 2 === 0 || rightPage % 2 === 1) {
    return false;
  }

  return pages.every((page) => page > MIN_PAGE && page < MAX_PAGE);
}

function isValidPages(...pages) {
  return pages.every((page) => isValidPage(page));
}

function problem1(pobi, crong) {
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;
  const EXCEPTION = -1;

  if (!isValidPages(pobi, crong)) {
    return EXCEPTION;
  }

  const pobiMaxNum = calcMaxNumber(pobi);
  const crongMaxNum = calcMaxNumber(crong);

  if (pobiMaxNum > crongMaxNum) {
    return POBI_WIN;
  }

  if (pobiMaxNum < crongMaxNum) {
    return CRONG_WIN;
  }

  if (pobiMaxNum === crongMaxNum) {
    return DRAW;
  }

  return EXCEPTION;
}

module.exports = problem1;
