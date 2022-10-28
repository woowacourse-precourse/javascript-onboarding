function isInvalidInput(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage + 1 !== rightPage) return true;
  if (leftPage === 1 || rightPage === 400) return true;
  if (leftPage % 2 === 0 || rightPage % 2) return true;
  return false;
}

function getMaxInPage(page) {
  const digits = Array.from(String(page))
    .map((digit) => Number(digit));
  const sum = digits.reduce((acc, cur) => acc + cur, 0);
  const multiply = digits.reduce((acc, cur) => acc * cur, 1);
  return Math.max(sum, multiply);
}

function getScore(pages) {
  const [leftPage, rightPage] = pages;
  return Math.max(getMaxInPage(leftPage), getMaxInPage(rightPage));
}

function problem1(pobi, crong) {
  if (isInvalidInput(pobi) || isInvalidInput(crong)) {
    return -1;
  }
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  if (pobiScore === crongScore) return 0;
  if (pobiScore > crongScore) return 1;
  return 2;
}

module.exports = problem1;
