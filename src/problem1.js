// 16:56 ~
function problem1(pobi, crong) {
  if (!isPagesCorrect(pobi) || !isPagesCorrect(crong)) return -1;
  let pobiMaxNum = getMaxNum(pobi);
  let crongMaxNum = getMaxNum(crong);
  return pobiMaxNum > crongMaxNum ? 1 : pobiMaxNum < crongMaxNum ? 2 : 0;
}

function getMaxNum(pages) {
  return Math.max(
    multiplyDigits(pages[0]),
    addDigits(pages[0]),
    multiplyDigits(pages[1]),
    addDigits(pages[1])
  );
}

function multiplyDigits(page) {
  return page
    .toString()
    .split("")
    .reduce((a, c) => a * Number(c), 1);
}

function addDigits(page) {
  return page
    .toString()
    .split("")
    .reduce((a, c) => a + Number(c), 0);
}

function isPagesCorrect(pages) {
  // 짝수, 홀수 올바른가
  return pages[0] % 2 === 0 || pages[1] % 2 || pages[1] - pages[0] !== 1
    ? false
    : true;
}
module.exports = problem1;
