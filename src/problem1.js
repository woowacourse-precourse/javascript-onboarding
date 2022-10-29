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

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
