function checkValidation(pageArr) {
  const [left, right] = pageArr;

  return left % 2 === 1 && right - left && left >= 3 && left <= 397;
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

  var answer;

  return answer;
}

module.exports = problem1;
