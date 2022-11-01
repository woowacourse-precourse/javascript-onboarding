function problem1(pobi, crong) {
  // 예외사항은 -1로 return한다.
  if (!isValidPages(pobi) || !isValidPages(crong)) {
    return -1;
  }

  // pobi와 crong의 점수를 구한다.
  const scorePobi = getScoreByPages(pobi);
  const scoreCrong = getScoreByPages(crong);

  // 두 점수를 비교하여 적절한 값을 리턴한다.
  if (scorePobi > scoreCrong) {
    return 1; // 포비 승
  } else if (scorePobi < scoreCrong) {
    return 2; // 크롱 승
  } else {
    return 0; // 무승부
  }
}

/**
 * 양 페이지로 입력받은 값이 적절한지 검사한다.
 * @param {any} pages
 * @returns {boolean} 유효하면 true, 유효하지 않으면 false를 리턴한다.
 */
function isValidPages(pages) {
  if (!Array.isArray(pages) || pages.length !== 2) {
    // 1. pages가 길이가 2인 배열이 아니면 유효하지 않다.
    return false;
  }
  if (!Number.isInteger(pages[0]) || !Number.isInteger(pages[1])) {
    // 2. pages의 배열요소가 숫자가 아니면 유효하지 않다.
    return false;
  }
  if (!isWithinValidRange(pages[0]) || !isWithinValidRange(pages[1])) {
    // 3. pages의 배열요소가 1보다 작거나 400보다 크면 유효하지 않다.
    return false;
  }
  if (pages[0] + 1 !== pages[1]) {
    // 4. 왼쪽 페이지 값 + 1 이 오른쪽 페이지 값과 같지 않으면 유효하지 않다.
    return false;
  }
  if (pages[0] % 2 !== 1 && pages[1] % 2 !== 0) {
    // 5. 왼쪽이 홀수, 오른쪽이 짝수가 아니면 유효하지 않다.
    return false;
  }
  return true;
}

/**
 * 값이 유효한 페이지 범위 (1~400)에 속하는지 검사한다.
 * @param {number} page
 * @returns {boolean} 유효하면 true, 유효하지 않으면 false를 리턴한다.
 */
function isWithinValidRange(page) {
  return page > 0 && page <= 400;
}

/**
 * 양 페이지로 입력받은 값으로부터 점수를 계산한다.
 * @param {array} pages 길이가 2이고, 배열의 요소는 숫자이다.
 * @returns {number} 계산된 스코어 값
 */
function getScoreByPages(pages) {
  const scoreLeft = getScoreByPage(pages[0]);
  const scoreRight = getScoreByPage(pages[1]);
  return Math.max(scoreLeft, scoreRight);
}

/**
 * 한 페이지에 대한 점수를 계산한다.
 * @param {number} page
 * @return {number} 계산된 스코어 값
 */
function getScoreByPage(page) {
  const pageStr = page + "";
  let added = +pageStr[0];
  let multiplied = +pageStr[0];
  for (let i = 1; i < pageStr.length; i++) {
    added = added + +pageStr[i];
    multiplied = multiplied * +pageStr[i];
  }
  return Math.max(added, multiplied);
}

module.exports = problem1;
