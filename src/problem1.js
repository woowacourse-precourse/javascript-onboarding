function problem1(pobi, crong) {
  // 점수 선언
  const SCORE = {
    POBI_WIN: 1,
    CRONG_WIN: 2,
    TIE: 0,
    ERROR: -1
  }

  // 유효성 검사 후 예외사항은 -1로 return
  if(!isValidPageNumber(pobi) || !isValidPageNumber(crong)) {
    return SCORE.ERROR;
  }

  // sort 함수를 통해 왼쪽, 오른쪽 페에지 번호 중 큰 점수를 자신에게 적용
  pobi = pobi.map((el) => getMaxNumberPlusOrMutiplication(String(el))).sort((a,b) => b - a)[0];
  crong = crong.map((el) => getMaxNumberPlusOrMutiplication(String(el))).sort((a,b) => b - a)[0];

  // 조건을 통하여 점수 반환
  return pobi > crong ? SCORE.POBI_WIN : pobi == crong ? SCORE.TIE : SCORE.CRONG_WIN;
}

// 번호의 각 자리 숫자를 모두 더하거나 곱해서 가장 큰 수를 구한다.
const getMaxNumberPlusOrMutiplication = (numberStr) => {
  const plus = [...numberStr].reduce((prev, current) => Number(prev) + Number(current), 0);
  const multiplication = [...numberStr].reduce((prev, current) => Number(prev) * Number(current), 1);
  return plus > multiplication ? plus : multiplication;
}

// 페이지 번호의 유효성 검사
const isValidPageNumber = ([left, right]) => {
  // 시작 면이나 마지막 면이 나오게 된다면 false 반환
  if(left === 1 || right === 400) return false;
  // 연속되지 않은 숫자라면 false 반환
  if(left + 1 != right) return false;
  // 이외의 경우 true 반환
  return true;
}

module.exports = problem1;
