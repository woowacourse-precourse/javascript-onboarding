// 주어진 페이지 계산(더하기, 곱하기) 결과 중 가장 큰 수 반환 기능

// 왼쪽, 오른쪽 페이지 계산 결과 중 가장 큰 수 반환 기능

// 연속페이지 검증 기능

function isValidPage(page) {
  if (page[0] === 1 || page[1] === 400) return false;
  else return true;
}

function problem1(pobi, crong) {
  let answer;

  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;

  return answer;
}

module.exports = problem1;
