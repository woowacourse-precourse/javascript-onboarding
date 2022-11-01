/**
 * 숫자를 받고, 각 자리수에 따른 숫자를 반환함.
 * ex) 123 -> [1, 2, 3]
 * @param {number} 변환할 숫자
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
 * @param {array} 자리수 배열
 * @return {array} [더한 값, 곱한 값]
 */
const calcPageValues = (digitList) => {
  return [
    digitList.reduce((cum, cur) => (cum += cur)),
    digitList.reduce((cum, cur) => (cum *= cur), 1),
  ];
};

module.exports = { getDigitFromNum, calcPageValues };
