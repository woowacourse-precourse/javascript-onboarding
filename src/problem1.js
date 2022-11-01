function checkValidation(pageArr) {
  const [left, right] = pageArr;

  return left % 2 === 1 && left + 1 === right && left >= 3 && left <= 397;
}

function getMulti(pageNum) {
  return [...String(pageNum)].reduce((acc, cur) => (acc *= Number(cur)), 1);
}

function getSum(pageNum) {
  return [...String(pageNum)].reduce((acc, cur) => (acc += Number(cur)), 0);
}

function getScore(player) {
  const PAGE_LEFT = 0;
  const PAGE_RIGHT = 1;

  return Math.max(
    getMulti(player[PAGE_LEFT]),
    getSum(player[PAGE_LEFT]),
    getMulti(player[PAGE_RIGHT]),
    getSum(player[PAGE_RIGHT])
  );
}

function problem1(pobi, crong) {
  if (!checkValidation(pobi) || !checkValidation(crong)) return -1;

  let answer = 0;

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore > crongScore) answer = 1;
  if (crongScore > pobiScore) answer = 2;

  return answer;
}

module.exports = problem1;
