function checkValidation(pageArr) {
  const [left, right] = pageArr;

  return left % 2 === 1 && right - left && left >= 3 && left <= 397;
}

function getMulti(pageNum) {
  return [...String(pageNum)].reduce((acc, cur) => (acc *= Number(cur)), 1);
}

function problem1(pobi, crong) {
  if (!checkValidation(pobi) || !checkValidation(crong)) return -1;

  console.log(getMulti(pobi[0]));

  var answer;

  return answer;
}

module.exports = problem1;
