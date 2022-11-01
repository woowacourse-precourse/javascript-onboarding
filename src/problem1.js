function problem1(pobi, crong) {
  var answer;

  // 예외 처리
  // 왼쪽 페이지 : 홀수
  if (pobi[0] % 2 !== 1 || crong[0] % 2 !== 1) {
    return -1;
  }

  // 오른쪽 페이지 : 짝수
  if (pobi[1] % 2 !== 0 || crong[1] % 2 !== 0) {
    return -1;
  }

  // 오른쪽 페이지 - 왼쪽 페이지 = 1
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  // 시작면 or 마지막 면
  if (pobi[0] <= 1 || crong[0] <= 1 || pobi[1] >= 400 || pobi[1] >= 400) {
    return -1;
  }

  var pobi_left = compareNum(addNum(pobi[0]), multNum(pobi[0]));
  var pobi_right = compareNum(addNum(pobi[1]), multNum(pobi[1]));
  var pobi_num = compareNum(pobi_left, pobi_right);

  var crong_left = compareNum(addNum(crong[0]), multNum(crong[0]));
  var crong_right = compareNum(addNum(crong[1]), multNum(crong[1]));
  var crong_num = compareNum(crong_left, crong_right);

  if (pobi_num > crong_num) {
    answer = 1;
  } else if (pobi_num < crong_num) {
    answer = 2;
  } else if (pobi_num === crong_num) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}

// 1-1. 각 자리 숫자 모두 더하는 함수
function addNum(num) {
  var result = 0;

  while (num > 0) {
    result += num % 10;
    num = parseInt(num / 10);
  }

  return result;
}

// 1-2. 각 자리 숫자 모두 곱하는 함수
function multNum(num) {
  var result = 1;

  while (num > 0) {
    result *= num % 10;
    num = parseInt(num / 10);
  }

  return result;
}

// 1-3. 가장 큰 수 구하는 함수
function compareNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

module.exports = problem1;
