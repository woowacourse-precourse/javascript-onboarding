function problem1(pobi, crong) {
  var answer;
  return answer;
}

/**
 * 기능 정리
 * 1. 페이지 번호의 각 자리 숫자를 모두 더하는 함수
 * 2. 페이지 번호의 각 자리 숫자를 모두 더하는 함수
 * 3. 어떤 숫자가 더 큰지 비교하는 함수
 */
function reduceAfterSplit(str, cb) {
  if (isNaN(str)) throw new Error("숫자가 아닙니다.");

  const digits = str.split("");
  return digits.reduce(cb);
}

function addDigits(str) {
  return reduceAfterSplit(
    str,
    (acc, cur) => parseInt(acc, 10) + parseInt(cur, 10)
  );
}

function multiplyDigits(str) {
  return reduceAfterSplit(
    str,
    (acc, cur) => parseInt(acc, 10) * parseInt(cur, 10)
  );
}

function compare(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}
function getLargerPageCalc(page) {
  const added = addDigits(page);
  const multiplied = multiplyDigits(page);
  const larger = compare(added, multiplied);

  return larger;
}

module.exports = problem1;
