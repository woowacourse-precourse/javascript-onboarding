function isArrayIncludesZero(nums) {
  return nums.includes(0);
}

function calcMaxNumber(num) {
  const nums = num.toString().split("").map(Number);

  if (isArrayIncludesZero(nums)) {
    return nums.reduce((a, b) => a + b, 0);
  }

  return Math.max(
    nums.reduce((a, b) => a * b, 1),
    nums.reduce((a, b) => a + b, 0)
  );
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

function problem1(pobi, crong) {
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const DRAW = 0;
  const EXCEPTION = -1;

  if (!isValidPage(pobi) || !isValidPage(crong)) {
    return EXCEPTION;
  }

  const [pobiLeftPage, pobiRightPage] = pobi;
  const [crongLeftPage, crongRightPage] = crong;

  const pobiMaxNum = Math.max(
    calcMaxNumber(pobiLeftPage),
    calcMaxNumber(pobiRightPage)
  );
  const crongMaxNum = Math.max(
    calcMaxNumber(crongLeftPage),
    calcMaxNumber(crongRightPage)
  );

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
