function problem1(pobi, crong) {
  var answer;

  // 결과 처리
  if (pobiPoint[0] > crongPoint[0]) {
    answer = 1;
  } else if (pobiPoint[0] < crongPoint[0]) {
    answer = 2;
  } else if (pobiPoint[0] === crongPoint[0]) {
    answer = 0;
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
