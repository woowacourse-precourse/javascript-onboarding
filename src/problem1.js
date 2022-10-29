/**
 * 배열의 길이가 2인지 체크한다.
 * @param {number[]} arr - 한명의 페이지 번호가 담긴 배열
 * @return {boolean}
 */
const isArrayLengthTwo = (arr) => {
  const DESIGNATED_ARR_LENGTH = 2;

  return arr.length === DESIGNATED_ARR_LENGTH;
};

/**
 * 배열의 원소들이 range 에서 벗어나지 않는지 체크한다.
 * @param {number[]} arr - 한명의 페이지 번호가 담긴 배열
 * @return {boolean}
 */
const isValidRange = (arr) => {
  const MIN_PAGE_NUM = 1;
  const MAX_PAGE_NUM = 400;
  const firstPage = arr[0];
  const secondPage = arr[1];

  const isFirstPageInValidRange =
    firstPage >= MIN_PAGE_NUM && firstPage <= MAX_PAGE_NUM;
  const isSecondPageInValidRange =
    secondPage >= MIN_PAGE_NUM && secondPage <= MAX_PAGE_NUM;

  return isFirstPageInValidRange && isSecondPageInValidRange;
};

/**
 * 배열의 2개의 원소가 연속적으로 [홀수, 짝수] 로 들어가있는지 체크한다.
 * @param {number[]} arr - 한명의 페이지 번호가 담긴 배열
 * @return {boolean}
 */
const isArrayConsecutiveOddEvenNumbers = (arr) => {
  const isFirstElOdd = arr[0] % 2 !== 0;
  const isSecondElEven = arr[1] % 2 === 0;
  const isArrayConsecutive = arr[1] - arr[0] === 1;

  return isFirstElOdd && isSecondElEven && isArrayConsecutive;
};

/**
 * 주어진 pobi와 crong의 input이 valid한지 체크한다.
 * @param {number[]} firstArr - pobi의 페이지 번호가 담긴 배열
 * @param {number[]} secondArr - crong의 페이지 번호가 담긴 배열
 * @return {boolean}
 */
const isValidInput = (firstArr, secondArr) => {
  const isFirstArrValid =
    isArrayLengthTwo(firstArr) &&
    isValidRange(firstArr) &&
    isArrayConsecutiveOddEvenNumbers(firstArr);

  const isSecondArrValid =
    isArrayLengthTwo(secondArr) &&
    isValidRange(secondArr) &&
    isArrayConsecutiveOddEvenNumbers(secondArr);

  return isFirstArrValid && isSecondArrValid;
};

/**
 * 숫지를 각 자리 숫자로 쪼갠 배열을 반환한다.
 * @param number - 페이지 번호
 * @return {number[]}
 */
const getDigitSplittedArr = (number) => {
  return number.toString().split("").map(Number);
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
