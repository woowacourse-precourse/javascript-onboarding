function sumPage(page) {
  let result = 0;
  do {
    result += page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return result;
}
function multiplyPage(page) {
  let result = 1;
  do {
    result *= page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return result;
}
function findMaxCal(page) {
  const sumResult = sumPage(page);
  const multiplyResult = multiplyPage(page);
  return Math.max(sumResult, multiplyResult);
}
function isSide(page) {
  if (page[0] === 1 || page[1] === 400) {
    return false;
  }
  return true;
}
function isContinue(page) {
  if (page[1] - page[0] !== 1) {
    return false;
  }
  return true;
}

function problem1(pobi, crong) {
  let answer;
  if (!isSide(pobi) || !isSide(crong)) return -1;
  if (!isContinue(pobi) || !isContinue(crong)) return -1;
  const pobiPageResult = Math.max(findMaxCal(pobi[0]), findMaxCal(pobi[1]));
  const crongPageResult = Math.max(findMaxCal(crong[0]), findMaxCal(crong[1]));

  if (pobiPageResult > crongPageResult) answer = 1;
  else if (pobiPageResult < crongPageResult) answer = 2;
  else answer = 0;
  return answer;
}

module.exports = problem1;
