function isIntegerParsable(n) {
  return !Number.isNaN(parseInt(n)) && Number.isSafeInteger(Number(n));
};

function isProperInput(pages) {
  const FIRST_PAGE_NUMBER = 1;
  const LAST_PAGE_NUMBER = 400;
  const LEFT_PAGE = 0;
  const RIGHT_PAGE = 1;

  if(!isIntegerParsable(pages[LEFT_PAGE]) || !isIntegerParsable(pages[RIGHT_PAGE])) {
    return false;
  }

  const leftPageNumber = parseInt(pages[LEFT_PAGE]);
  const rightPageNumber = parseInt(pages[RIGHT_PAGE]);

  if (leftPageNumber === FIRST_PAGE_NUMBER) {
    return false;
  }

  if (rightPageNumber === LAST_PAGE_NUMBER) {
    return false;
  }

  if (leftPageNumber !== rightPageNumber - 1) {
    return false;
  }

  return true;
}

function problem1(pobi, crong) {
  let answer;

  const CODE_EXCEPTION = -1;

  if (!isProperInput(pobi) || !isProperInput(crong)) {
    return CODE_EXCEPTION;
  }

  return answer;
}

module.exports = problem1;
