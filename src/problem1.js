/** 입력받은 숫자의 각 자리수를 더한 값을 반환하는 함수 **/
function add(page) {
  var number;
  while (page > 0) {
    number = number + (page % 10);
    page = page / 10;
  }
  return number;
}

/** 입력받은 숫자의 각 자리수를 곱한 값을 반환하는 함수 **/
function multiply(page) {
  var number;
  while (page > 0) {
    number = number * (page % 10);
    page = page / 10;
  }
  return number;
}

/** 펼친 페이지 숫자가 들어있는 배열을 입력받아서 게임 규칙에 따라 큰 수를 찾아 반환하는 함수 **/
function findLargeNumbe(name) {
  var largeNumber = 0;
  for (var i = 0; i < 2; i++) {
    largeNumber = Math.max(largeNumber, add(name[i]), multiply(name[i]));
  }
  return largeNumber;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
