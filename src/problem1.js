function scoringFormula(page) {
  const digitsArray = page.toString().split('').map((digit) => parseInt(digit));

  const sumOfDigits = digitsArray.reduce((prev, curr) => prev + curr);
  const productOfDigits = digitsArray.reduce((prev, curr) => prev * curr);

  return sumOfDigits > productOfDigits ? sumOfDigits : productOfDigits;
}

function countScore(pages) {
  const LEFT_PAGE = 0;
  const RIGHT_PAGE = 1;

  const leftScore = scoringFormula(pages[LEFT_PAGE]);
  const rightScore = scoringFormula(pages[RIGHT_PAGE]);

  return leftScore > rightScore ?  leftScore : rightScore;
}

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
  const CODE_EXCEPTION = -1;
  const CODE_POBI_WIN = 1;
  const CODE_CRONG_WIN = 2;
  const CODE_SAME_POINT = 0;

  let answer;

  if (!isProperInput(pobi) || !isProperInput(crong)) {
    return CODE_EXCEPTION;
  }

  const pobiScore = countScore(pobi);
  const crongScore = countScore(crong);

  if (pobiScore > crongScore) {
    answer = CODE_POBI_WIN
    return answer;
  }
  if (pobiScore < crongScore) {
    answer = CODE_CRONG_WIN
    return answer;
  }
  answer = CODE_SAME_POINT;
  return answer;
}

module.exports = problem1;
