function isValid(pages) {
  const FIRST_PAGE = 1;
  const LAST_PAGE = 400;

  if (pages.length > 2) {
    return false;
  }

  const [left, right] = pages;
  // 페이지가 범위를 넘어가면 오류
  if (left < FIRST_PAGE || LAST_PAGE < left) {
    return false;
  }
  if (right < FIRST_PAGE || LAST_PAGE < right) {
    return false;
  }
  // 왼쪽 페이지는 홀수가 아니면 오류
  if (left % 2 !== 1) {
    return false;
  }
  // 오른쪽 페이지는 짝수가 아니면 오류
  if (right % 2 !== 0) {
    return false;
  }
  // 연속된 수가 아니면 오류
  if (Math.abs(right - left) !== 1) {
    return false;
  }
  return true;
}

function calcScore(page) {
  const numbers = [...page.toString()].map(str => parseInt(str));
  const added = numbers.reduce((acc, cur) => acc + cur, 0);
  const multiplied = numbers.reduce((acc, cur) => acc * cur, 1);
  return Math.max(added, multiplied);
}

function getScore(pages) {
  const [left, right] = pages;
  return Math.max(calcScore(left), calcScore(right));
}

function problem1(pobi, crong) {
  const EXCEPT = -1;
  const TIE = 0;
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  
  if (!isValid(pobi) || !isValid(crong)) {
    return EXCEPT;
  }

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  if (pobiScore > crongScore) {
    return POBI_WIN;
  }
  if (crongScore > pobiScore) {
    return CRONG_WIN;
  }
  return TIE;
}

module.exports = problem1;
