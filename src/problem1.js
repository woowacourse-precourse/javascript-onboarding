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

function calculMax(page) {
  // 변수 선언
  var sum = 0;
  var mul = 1;
  var max = [];
  //   1. 페이지 숫자 -> 문자열로 변환
  for (i = 0; i < 2; i++) {
    page[i] = page[i].toString();
    // 2. 자리수만큼 반복문 돌며, 최대값 찾기하기
    //  2-1. 각 자리 더하기
    for (j = 0; j < page[i].length; j++) {
      sum += Number(page[i][j]);
    }
    //  2-2. 각 자리 곱하기
    for (j = 0; j < page[i].length; j++) {
      mul *= Number(page[i][j]);
    }
    // 3. 각 페이지 별 최댓값 비교
    max[i] = sum < mul ? mul : sum;
    sum = 0;
    mul = 1;
  }
  return Math.max(...max);
}

function problem1(pobi, crong) {
  // 변수 선언
  var p_max = 0;
  var c_max = 0;

  // - 유효값 체크
  if (isInvalidArgument(pobi, crong)) return -1;

  // - 게임 시작 (최대값 구하는 함수 구현)
  p_max = calculMax(pobi);
  c_max = calculMax(crong);
}

module.exports = problem1;
