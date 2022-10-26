const isPagesOddAndEven = (pages) => pages[0] % 2 === 1 && pages[1] % 2 === 0;
const isContinuous = (pages) => pages[0] + 1 === pages[1];
const isInPageRange = (pages) => pages.every((page) => page > 1 && page < 400);

function isValidPages(pages) {
  if (
    !isPagesOddAndEven(pages) ||
    !isContinuous(pages) ||
    !isInPageRange(pages)
  ) {
    return false;
  }

  return true;
}

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

  return 0;
}

module.exports = problem1;
