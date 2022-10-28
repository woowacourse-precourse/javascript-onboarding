function calculator(page) {
  const plus = String(page)
    .split('')
    .reduce((sum, val) => sum + Number(val), 0);

  const mul = String(page)
    .split('')
    .reduce((sum, val) => sum * Number(val), 1);

  return Math.max(plus, mul);
}

// 왼쪽, 오른쪽 페이지 계산 결과 중 가장 큰 수 반환 기능

function isContinuityPage(page) {
  if (page[1] - page[0] !== 1) return false;
  else return true;
}

function isValidPage(page) {
  if (page[0] === 1 || page[1] === 400) return false;
  else return true;
}

function problem1(pobi, crong) {
  let answer;

  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;
  if (!isContinuityPage(pobi) || !isContinuityPage(crong)) return -1;

  return answer;
}

module.exports = problem1;
