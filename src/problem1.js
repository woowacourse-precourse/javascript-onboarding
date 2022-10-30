/**
 * 기능 목록
 *
 * - [x] pobi와 crong 배열이 올바르게 입력되었는지 확인하기
 *    - [x] pobi와 crong 배열의 각 값이 1이상 400 이하의 수로 이루어졌는지 확인하기
 *    - [x] pobi와 crong 배열의 각 값이 연속된 오름차순으로 이루어졌는지 확인하기
 * - [x] pobi와 crong 배열의 값으로 포비와 크롱의 점수 구하기
 *    - [x] 왼쪽, 오른쪽 페이지의 각 자릿수의 합과 곱 중 큰 수 구하기
 *    - [x] 구한 두 수 중 큰 수를 반환하기
 * - [x] 각 배열을 통해 구한 점수를 비교해서 요구사항에 맞도록 값을 반환하기
 *    - [x] 두 수를 대소를 비교하는 기능
 */

/**
 * 포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때,
 * 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1을 반환하는 함수
 *
 * @param {number[]} pobi 포비가 펼친 페이지가 들어있는 배열
 * @param {number[]} crong 크롱이 펼친 페이지가 들어있는 배열
 * @returns {number} 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1
 */
function problem1(pobi, crong) {
  if (!validatePages(pobi) || !validatePages(crong)) {
    return -1;
  }

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  return compareTwoNumbers(pobiScore, crongScore);
}

/**
 * 입력받은 페이지가 올바른 값인지 확인하는 함수
 *
 * @param {number[]} pages - 길이가 2인 정수 배열
 * @return {boolean}
 */
function validatePages(pages) {
  const [leftPage, rightPage] = pages;

  if (!isInRange(leftPage) || !isInRange(rightPage)) {
    return false;
  }

  if (!areConsecutive(pages)) {
    return false;
  }

  return true;
}

/**
 * 하나의 수가 범위(min-max)내에 있는지 확인하는 함수
 *
 * @param {number} number 범위 내이 있는지 확인하려는 수
 * @param {number} [min=1] 범위 최솟값
 * @param {number} [max=400] 범위 최댓값
 * @returns {boolean} 범위 내에 있다면 true 아니라면 false
 */
function isInRange(number, min = 1, max = 400) {
  return min <= number && number <= max;
}

/**
 * 입력받은 정수 배열의 각 값들이 연속된 수인지 확인하는 함수
 *
 * @param {number[]} numbers 1 이상 400 이하의 정수로 이루어진 길이가 2인 배열
 * @returns {boolean} 두 수가 연속된 수라면 true, 아니라면 false
 */
function areConsecutive(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) {
      return false;
    }
  }

  return true;
}

/**
 * 입력받은 두 페이지의 각 페이지로부터 구할 수 있는 큰 수를 서로 비교해서 큰 수를 반환하는 함수
 *
 * @param {number[]} pages 연속된 오름차순으로 이루어진 길이가 2인 정수 배열
 * @returns {number} 왼쪽, 오른쪽 페이지로 구한 수 중 큰 수
 */
function getScore(pages) {
  const [leftPage, rightPage] = pages;

  const maxLeft = getBiggerNumberBetweenSumAndProduct(leftPage);
  const maxRight = getBiggerNumberBetweenSumAndProduct(rightPage);

  return maxLeft > maxRight ? maxLeft : maxRight;
}

/**
 * 입력받은 수의 각 자릿수의 합과 곱 중에서 큰 수를 반환하는 함수
 *
 * @param {number} number 1 이상의 정수
 * @returns {number} 입력받은 수의 각 자릿수의 합과 곱 중에 큰 수
 */
function getBiggerNumberBetweenSumAndProduct(number) {
  const digits = number.toString().split("").map(Number);
  const sum = digits.reduce((acc, cur) => acc + cur, 0);
  const product = digits.reduce((acc, cur) => acc * cur, 1);

  return sum > product ? sum : product;
}

/**
 * 두 수의 값을 비교해서 같다면 0, number1이 크면 1, number2가 크면 2를 반환하는 함수
 *
 * @param {number} number1 1 이상의 정수
 * @param {number} number2 1 이상의 정수
 * @returns {number} 같다면 0, number1이 크면 1, number2가 크면 2
 */
function compareTwoNumbers(number1, number2) {
  if (number1 === number2) {
    return 0;
  }

  return number1 > number2 ? 1 : 2;
}

module.exports = problem1;
