function problem1(pobi, crong) {
  let answer;

  if (isInvalidInput(pobi, crong)) {
    return -1;
  }

  return answer;
}

function isInvalidInput(pobi, crong) {
  if (isFirstOrLastPage(pobi, crong)) return true;
  if (isInvalidPageNumber(pobi, crong)) return true;
  return false;
}

function isFirstOrLastPage(pobi, crong) {
  if (pobi[0] === 1) return true;
  if (pobi[1] === 400) return true;
  if (crong[0] === 1) return true;
  if (crong[1] === 400) return true;
  return false;
}

function isInvalidPageNumber(pobi, crong) {
  if (pobi[0] % 2 === 0 || pobi[0] + 1 !== pobi[1]) return true;
  if (crong[0] % 2 === 0 || crong[0] + 1 !== crong[1]) return true;
  return false;
}

module.exports = problem1;

/*
1. 입력 값 예외 처리 구현
  - 시작 면, 마지막 면 금지
  - [nbr(홀), nbr + 1(짝)] 포맷만 가능
2. 각 자리 수 '더하기, 곱하기' 기능 구현
3. 더한 값, 곱한 값 중 큰 값 중 점수 선택
4. 포비 vs 크롱 대결, 결과 값 반환
*/
