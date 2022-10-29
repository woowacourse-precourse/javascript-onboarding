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

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
