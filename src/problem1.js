function checkValidation(pageArr) {
  const [left, right] = pageArr;

  return left % 2 === 1 && right - left && left >= 3 && left <= 397;
}

function problem1(pobi, crong) {
  if (!checkValidation(pobi) || !checkValidation(crong)) return -1;

  var answer;

  return answer;
}

module.exports = problem1;
