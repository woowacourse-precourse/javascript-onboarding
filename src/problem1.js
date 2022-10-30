const checkException = (leftPage, rightPage) => {
  // 책이 중간에 찢어졌을때 바로 옆 페이지가 아닐 수 있습니다.
  if (leftPage + 1 < rightPage) return 0;
  
  return 1;
}

function problem1(pobi, crong) {
  var answer;

  // 예외사항 발견시 -1을 리턴하고 종료합니다.
  // 발생가능한 예외사항으로는 왼쪽 페이지와 오른쪽 페이지가 서로 연속되지 않을 수 있습니다.
  if (!checkException(pobi[0], pobi[1])){
    return -1;
  }
  if (!checkException(crong[0], crong[1])){
    return -1;
  }
  

  return answer;
}

module.exports = problem1;
