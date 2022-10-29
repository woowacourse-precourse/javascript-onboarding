function problem1(pobi, crong) {
  // 예외처리 적용
  if (errorHandler(pobi, crong)){
    return -1;
  }

  var answer;
  return answer;
}

// 예외처리 함수
function errorHandler(a, b){
  // 책 페이지가 잘못됬을 경우
  if ((a[1] - 1 != a[0]) | (b[1] - 1 != b[0])){
    return true;
  }
  // 첫페이지와 마지막페이지를 펼쳤을 경우
  else if ((a[0] >= 400) | (b[0] >= 400) | (a[0] <= 1) | (b[0] <= 1)){
    return true;
  }
  else return false;
}

module.exports = problem1;
