function problem1(pobi, crong) {
  if (!isPagesCorrect(pobi) || !isPagesCorrect(crong)) return -1;
  return compareMaxNums(getMaxNum(pobi), getMaxNum(crong));
}

function isPagesCorrect(pages) {
  return isEven(pages[0]) || isOdd(pages[1]) || isConsecutive(pages)
    ? false
    : true;
}

function isOdd(page) {
  return page % 2 === 1;
}

function isEven(page) {
  return page % 2 === 0;
}

function isConsecutive(pages) {
  return pages[1] - pages[0] !== 1;
}

function compareMaxNums(user1Num, user2Num) {
  return user1Num > user2Num ? 1 : user1Num < user2Num ? 2 : 0;
}

function getMaxNum(pages) {
  return Math.max(getLargerNumOfPage(pages[0]), getLargerNumOfPage(pages[1]));
}

function getLargerNumOfPage(page) {
  return Math.max(addDigits(page), multiplyDigits(page));
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

module.exports = problem1;
