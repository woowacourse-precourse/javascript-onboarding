function problem1(pobi, crong) {
  if(!isValidPageNumber(pobi) || !isValidPageNumber(crong)) {
    return -1;
  }

  
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
