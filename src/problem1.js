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
  return Math.max(
    getMulti(player[0]),
    getSum(player[0]),
    getMulti(player[1]),
    getSum(player[1])
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
