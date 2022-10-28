function problem1(pobi, crong) {
  var answer;

  // 예외사항 확인
  if (isException(pobi) || isException(crong)){
    return -1;
  }

  return answer;
}

function isException(pages) {
  if (pages[1]-pages[0] != 1) {
    return true;
  }
  return false;
}

module.exports = problem1;
