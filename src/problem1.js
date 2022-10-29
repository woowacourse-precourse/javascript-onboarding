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

/**
 * 각 자리 숫자로 쪼갠 배열의 원소를 모두 더한 값을 반환한다.
 * @param arr - 각 자리 숫자로 쪼갠 배열
 * @return {number}
 */
const getDigitAddedNum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

/**
 * 각 자리 숫자로 쪼갠 배열의 원소를 모두 곱한 값을 반환한다.
 * @param arr - 각 자리 숫자로 쪼갠 배열
 * @return {number}
 */
const getDigitMultipliedNum = (arr) => {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

/**
 * 한명의 페이지 번호가 담긴 배열을 이용해 가장 큰 점수를 반환한다.
 * @param arr - 한명의 페이지 번호가 담긴 배열
 * @return {number}
 */
const getMaxNumber = (arr) => {
  const firstDigitsArr = getDigitSplittedArr(arr[0]);
  const secondDigitsArr = getDigitSplittedArr(arr[1]);

  const firstDigitsAddedNum = getDigitAddedNum(firstDigitsArr);
  const firstDigitsMultipliedNum = getDigitMultipliedNum(firstDigitsArr);
  const firstMaxNum = Math.max(firstDigitsAddedNum, firstDigitsMultipliedNum);

  const secondDigitsAddedNum = getDigitAddedNum(secondDigitsArr);
  const secondDigitsMultipliedNum = getDigitMultipliedNum(secondDigitsArr);
  const secondMaxNum = Math.max(
    secondDigitsAddedNum,
    secondDigitsMultipliedNum
  );

  return Math.max(firstMaxNum, secondMaxNum);
};

/**
 * 메인 함수
 * @param {number[]} pobi
 * @param {number[]} crong
 * @return {number}
 */
const problem1 = (pobi, crong) => {
  const EXCEPTIONAL_CASE_CODE = -1;

  // 주어진 input이 조건에 맞지 않는 경우 early return
  if (!isValidInput(pobi, crong)) {
    return EXCEPTIONAL_CASE_CODE;
  }

  // pobi의 가장 큰 점수
  const pobiMaxNum = getMaxNumber(pobi);
  // crong의 가장 큰 점수
  const crongMaxNum = getMaxNumber(crong);

  // pobi가 이긴 경우
  if (pobiMaxNum > crongMaxNum) {
    return 1;
  }

  // crong이 이긴 경우
  if (pobiMaxNum < crongMaxNum) {
    return 2;
  }

  // 무승부인 경우
  if (pobiMaxNum === crongMaxNum) {
    return 0;
  }

  // 예외사항
  return EXCEPTIONAL_CASE_CODE;
};

module.exports = problem1;
