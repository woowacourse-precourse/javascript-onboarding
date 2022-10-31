function plus(page) {
  return String(page)
    .split('')
    .reduce((sum, val) => sum + Number(val), 0);
}

function multiply(page) {
  return String(page)
    .split('')
    .reduce((sum, val) => sum * Number(val), 1);
}

function maxNumMeasure(page) {
  const plusResult = plus(page);
  const multiplyResult = multiply(page);

  return Math.max(plusResult, multiplyResult);
}

function findMaxNum(left, right) {
  const leftMax = maxNumMeasure(left);
  const rightMax = maxNumMeasure(right);

  return Math.max(leftMax, rightMax);
}

function isContinuityPage(page) {
  if (page[1] - page[0] !== 1) return false;
  else return true;
}

function isValidPage(page) {
  if (page[0] === 1 || page[1] === 400) return false;
  else return true;
}

function problem1(pobi, crong) {
  let answer;

  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;
  if (!isContinuityPage(pobi) || !isContinuityPage(crong)) return -1;

  pobiMaxNum = findMaxNum(pobi[0], pobi[1]);
  crongMaxNum = findMaxNum(crong[0], crong[1]);

  if (pobiMaxNum > crongMaxNum) answer = 1;
  else if (pobiMaxNum < crongMaxNum) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
