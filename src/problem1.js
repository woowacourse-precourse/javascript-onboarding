function isInvalidArgument(pobi, crong) {
  // 페이지 범위 초과
  if (pobi[0] < 2 || pobi[1] > 399 || crong[0] < 2 || crong[1] > 399) return 1;
  // 왼쪽이 홀수이고, 오른쪽이 짝수
  if (
    pobi[0] % 2 != 1 ||
    pobi[1] % 2 != 0 ||
    crong[0] % 2 != 1 ||
    crong[1] % 2 != 0
  )
    return 1;
  // 쪽수가 맞지 않을 때
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) return 1;
  return 0;
}

function problem1(pobi, crong) {
  // 변수 선언
  var answer;
  var p_max = 0;
  var c_max = 0;

  // 유효값 체크
  if (isInvalidArgument(pobi, crong)) return -1;
  // 게임 시작
  return answer;
}

module.exports = problem1;
