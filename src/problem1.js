function isValidPage(pages) {
  if (pages.length !== 2) return false;
  if (pages[1] - pages[0] !== 1) return false;
  return true;
}

function maxNum(pages) {
  const [leftPage, rightPage] = pages;
  const leftPageNums = String(leftPage)
    .split("")
    .map((value) => parseInt(value));
  const rightPageNums = String(rightPage)
    .split("")
    .map((value) => parseInt(value));

  const maxNum = Math.max(
    leftPageNums.reduce((acc, cur) => acc + cur, 0),
    rightPageNums.reduce((acc, cur) => acc + cur, 0),
    leftPageNums.reduce((acc, cur) => acc * cur, 1),
    rightPageNums.reduce((acc, cur) => acc * cur, 1)
  );

  return maxNum;
}

function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;
  const pobiScore = maxNum(pobi);
  const crongScore = maxNum(crong);
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
}

module.exports = problem1;
