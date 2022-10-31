function problem1(pobi, crong) {
  if (!passExceptions(pobi, crong)) return -1;
  const pobiBiggestScore = getScore(pobi);
  const crongBiggestScore = getScore(crong);
}

function getScore(pageArr) {
  const biggestNumArr = pageArr.map((page) => {
    return Math.max(addDigits(page), multiplyDigits(page));
  });
  return Math.max(...biggestNumArr);
}

function addDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

function multiplyDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((acc, cur) => acc * Number(cur), 1);
}

function passExceptions(pobi, crong) {
  return isSameChapter(pobi[0], pobi[1]) && isSameChapter(crong[0], crong[1]);
}

function isSameChapter(leftPage, rightPage) {
  return rightPage - leftPage === 1;
}

module.exports = problem1;
