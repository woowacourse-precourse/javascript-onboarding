/**
 * 숫자를 받고, 각 자리수에 따른 숫자를 반환
 * ex) 123 -> [1, 2, 3]
 * @param {number} num 변환할 숫자
 * @returns {array} 자리수 배열
 */
const getDigitFromNum = (num) => {
  const digitList = [];
  while (num > 0) {
    rest = num % 10;
    num = parseInt(num / 10);
    digitList.push(rest);
  }
  return digitList.reverse();
};

/**
 * 자리수 배열을 받고, 각 자리수를 곱하고, 더하는 2가지 결과를 반환
 * @param {array} digitList 자리수 배열
 * @return {array} [더한 값, 곱한 값]
 */
const calcPageValues = (digitList) => {
  return [
    digitList.reduce((cum, cur) => (cum += cur)),
    digitList.reduce((cum, cur) => (cum *= cur), 1),
  ];
};

/**
 * 2가지 숫자 비교
 * @param {number} num1 숫자(기준)
 * @param {number} num2 숫자(상대)
 * @return {number} 무승부 0, 승리 1, 패배 -1
 */
const compareValue = (num1, num2) => {
  if (num1 === num2) return 0;
  return num1 > num2 ? 1 : -1;
};

/**
 * 페이지를 받아 이것이 유효한 페이지인지 확인
 * @param {number} leftPage
 * @param {number} rightPage
 * @param {number} startPage
 * @param {number} lastPage
 * @return {boolean} 시작 또는 끝페이지인 경우, 페이지 차이가 1이 아닌경우, 왼쪽-홀수 오른쪽-짝수가 아닌경우 inValid
 */
const isValidPage = (leftPage, rightPage, startPage, lastPage) => {
  if (leftPage <= startPage || rightPage >= lastPage) return false;
  if (rightPage - leftPage !== 1) return false;
  if (!(leftPage % 2 === 1 && rightPage % 2 === 0)) return false;
  return true;
};

const GameError = (type) => {
  if (type === 1) {
    return new Error('page error');
  }
};

module.exports = {
  getDigitFromNum,
  calcPageValues,
  compareValue,
  isValidPage,
  GameError,
};
