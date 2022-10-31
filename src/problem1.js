function problem1(pobi, crong) {
  var answer;

  if (!validExceptions(pobi, crong)) return -1;

  answer = selectWinner(pobi, crong);
  return answer;
}


// 각 페이지의 연산과 관련된 메소드
/**
 * 페이지 각 자리의 합을 구하는 메소드 
 * @param {number} num 특정 페이지의 숫자
 * @returns {number} 페이지 각 자리의 합
 */
function sumDigits(num) {
  let sumResult = 0;
  while (num > 0) {
    sumResult += num % 10;
    num = parseInt(num / 10);
  }

  return sumResult;
}
/**
 * 페이지 각 자리의 곱을 구하는 메소드
 * @param {number} num 특정 페이지의 숫자
 * @returns {number} 페이지 각 자리의 곱
 */
function multiplyDigits(num) {
  let multiplyResult = 1;
  while (num > 0) {
    multiplyResult *= num % 10;
    num = parseInt(num / 10);
  }

  return multiplyResult;
}


// 연산 결과를 바탕으로 승자를 고르는 메소드
/**
 * 연산 결과를 바탕으로 승자를 고르는 메소드
 * @param {number[]} pobi pobi의 페이지 리스트
 * @param {number[]} crong crong의 페이지 리스트
 * @returns {number} 승자에 따른 결과 (0: 무승부, 1: 포비 승, 2: 크롱 승)
 */
function selectWinner(pobi, crong) {
  const pobiNumber = Math.max(sumDigits(pobi[0]), sumDigits(pobi[1]), multiplyDigits(pobi[0]), multiplyDigits(pobi[1]));
  const crongNumber = Math.max(sumDigits(crong[0]), sumDigits(crong[1]), multiplyDigits(crong[0]), multiplyDigits(crong[1]));

  if (pobiNumber == crongNumber) return 0;
  else if (pobiNumber > crongNumber) return 1;
  else return 2;
}


// 예외 처리
function validExceptions(arr1, arr2) {
  const range = validRange(arr1) && validRange(arr2);
  const page = validPage(arr1) && validPage(arr2);
  const continuous = validContinuous(arr1) && validContinuous(arr2);

  return range && page && continuous;
}

function validRange(arr) {
  return arr.every((item) => item >= 1 && 400 >= item)
}

function validPage(arr) {
  if (arr[0] % 2 == 0 || arr[1] % 2 == 1) return false;
  return true;
}

function validContinuous(arr) {
  if (arr[0] + 1 != arr[1]) return false;
  return true;
}

module.exports = problem1;
