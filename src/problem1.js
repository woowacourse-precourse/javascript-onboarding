function problem1(pobi, crong) {
  try {
    catchError(...pobi);
    catchError(...crong);
    return findWinner(pobi, crong);
  } catch (err) {
    return -1;
  }
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
function getLargestPage(pageLeft, pageRight) {
  const largestLeft = getLargerPageCalc(pageLeft);
  const largestRight = getLargerPageCalc(pageRight);
  return compare(largestLeft, largestRight);
}
function findWinner(pobi, crong) {
  const largestPobi = getLargestPage(...pobi);
  const largestCrong = getLargestPage(...crong);

  if (largestPobi === largestCrong) return 0;
  else if (largestPobi > largestCrong) return 1;
  else return 2;
}
function catchError(page1, page2) {
  //페이지가 홀수, 짝수가 아닐떄
  if ((page1 + page2) % 2 === 0) {
    throw new Error("페이자가 짝수 , 홀수가 아닙니다.");
  }
  if (page2 - page1 !== 1) {
    throw new Error("연속된 페이지가 아닙니다.");
  }
}

module.exports = problem1;
