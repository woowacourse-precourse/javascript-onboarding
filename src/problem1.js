const isPageOdd = (page) => page % 2 === 1;
const isContinuous = (pages) => pages[0] + 1 === pages[1];
const isInPageRange = (pages) => pages.every((page) => page > 1 && page < 400);

const isValidPages = (pages) =>
  isPageOdd(pages[0]) && isContinuous(pages) && isInPageRange(pages);

function addDigits(number) {
  let digits = number;
  let result = 0;

  while (digits > 0) {
    result += digits % 10;
    digits = parseInt(digits / 10);
  }

  return result;
}

function multiplyDigits(number) {
  let digits = number;
  let result = 1;

  while (digits > 0) {
    result *= digits % 10;
    digits = parseInt(digits / 10);
  }

  return result;
}

function getPageScores(pages) {
  const pageScores = pages.map((number) => {
    const addResult = addDigits(number);
    const multiplyResult = multiplyDigits(number);

    if (addResult > multiplyResult) {
      return addResult;
    }

    return multiplyResult;
  });

  return pageScores;
}

function getPlayerScore(pages) {
  const pageScores = getPageScores(pages);
  const playerScore = Math.max(...pageScores);

  return playerScore;
}

function problem1(pobi, crong) {
  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return -1;
  }

  const pobiScore = getPlayerScore(pobi);
  const crongScore = getPlayerScore(crong);

  if (pobiScore > crongScore) {
    return 1;
  }

  if (pobiScore < crongScore) {
    return 2;
  }

  if (pobiScore === crongScore) {
    return 0;
  }

  return -1;
}

module.exports = problem1;
