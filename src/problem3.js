/**
 * 숫자를 자릿수로 쪼갠 문자열의 배열을 반환한다.
 * @param {number} num - 확인해야 할 숫자
 * @return {string[]}
 */
const getDigitSplittedArr = (num) => {
  return num.toString().split("");
};

/**
 * 쳐야할 박수 숫자를 반환한다.
 * @param {number} num
 * @return {number}
 */
const getClapsToAdd = (num) => {
  const STANDARDS = ["3", "6", "9"];
  const numDigitArr = getDigitSplittedArr(num);
  let clapsToReturn = 0;

  for (let singleDigit of numDigitArr) {
    if (STANDARDS.includes(singleDigit)) {
      clapsToReturn++;
    }
  }

  return clapsToReturn;
};

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
