function getSum(page) {
  const num = [...page.toString()].map(Number).reduce((acc, cur) => acc + cur);
  return num;
}

function getMulti(page) {
  const num = [...page.toString()].map(Number).reduce((acc, cur) => acc * cur);
  return num;
}

function getScore(pages) {
  const [leftPage, rightPage] = pages;
  const numList = [];
  numList.push(getSum(leftPage));
  numList.push(getSum(rightPage));
  numList.push(getMulti(leftPage));
  numList.push(getMulti(rightPage));
  return Math.max(...numList);
}

function isException(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage === 1 || rightPage === 400) return 1;
  if (rightPage - leftPage !== 1) return 1;
  return 0;
}

function exceptionCheck(pages1, pages2) {
  return isException(pages1) || isException(pages2);
}

function problem1(pobi, crong) {
  if (exceptionCheck(pobi, crong)) return -1;
  const pobiMax = getScore(pobi);
  const crongMax = getScore(crong);
  let answer;
  if (pobiMax === crongMax) answer = 0;
  else if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  return answer;
}
module.exports = problem1;
