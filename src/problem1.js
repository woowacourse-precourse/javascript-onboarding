/**
 * @param {number[]} pobi 포비가 펼친 페이지
 * @param {number[]} crong 크롱이 펼친 페이지
 * @returns {number} 결과에 따른 반환값
 */
function problem1(pobi, crong) {
  const resultObj = {
    EXCEPTION: -1,
    DRAW: 0,
    POBI_WON: 1,
    CRONG_WON: 2,
  };

  // 결과는 예외로 초기화한다.
  let result = resultObj.EXCEPTION;

  // 포비와 크롱이 펼친 페이지가 유효한 페이지인지 검사한다.
  const isPobiPagesValid = validatePages(pobi);
  const isCrongPagesValid = validatePages(crong);

  // 둘 중 하나라도 유효하지 않은 페이지라면 현재 결과(예외)를 반환한다.
  if (!isPobiPagesValid || !isCrongPagesValid) return result;

  // 포비와 크롱의 점수를 계산한다.
  const pobiScore = calculateScore(pobi);
  const crongScore = calculateScore(crong);

  // 포비와 크롱의 점수를 비교해서 그 결과에 따른 값을 result에 할당한다.
  if (pobiScore === crongScore) result = resultObj.DRAW;
  else if (pobiScore > crongScore) result = resultObj.POBI_WON;
  else if (pobiScore < crongScore) result = resultObj.CRONG_WON;

  // result를 반환한다.
  return result;
}

/**
 * 포비와 크롱이 펼친 페이지가 유효한지 검사하는 함수
 * @param {number[]} pages 페이지 목록
 * @returns {boolean} 유효성
 */
function validatePages(pages) {
  // 첫번째와 마지막 페이지를 할당한다.
  const FIRST_PAGE = 1;
  const LAST_PAGE = 400;
  // 유효성을 true로 할당한다.
  let isValid = true;

  // 페이지를 왼쪽과 오른쪽으로 나눈다.
  const [left, right] = pages;

  // 왼쪽 페이지가 1이거나 오른쪽 페이지가 400이거나
  // 페이지가 연속되지 않으면 유효성에 false를 할당한다.
  if (right === FIRST_PAGE) isValid = false;
  else if (left === LAST_PAGE) isValid = false;
  else if (left + 1 !== right) isValid = false;

  // 유효성을 반환한다.
  return isValid;
}

/**
 * 페이지를 기반으로 점수를 계산해 반환하는 함수
 * @param {number[]} pages 페이지 목록
 * @returns {number} 점수
 */
function calculateScore(pages) {
  // 점수를 0으로 초기화한다.
  let score = 0;

  // 두 페이지를 순회하면서
  for (const page of pages) {
    // 해당 페이지의 숫자를 하나씩 나눈다.
    const numbers = page.toString().split("").map(Number);

    // 각 자리의 수를 더한 값이 현재 점수보다 크다면 할당한다.
    const sum = numbers.reduce((sum, number) => sum + number, 0);

    // 각 자리의 수를 곱한 값이 현재 점수보다 크다면 할당한다.
    const product = numbers.reduce((product, number) => product * number, 1);

    // sum과 product 중 큰 것을 score에 할당한다.
    score = sum < product ? product : sum;
  }

  // 점수를 반환한다.
  return score;
}

module.exports = problem1;
