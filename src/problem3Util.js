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

module.exports = {
  getDigitFromNum,
};
