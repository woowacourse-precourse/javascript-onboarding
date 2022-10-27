function problem1(pobi, crong) {
  var answer;

  return answer;
}

//예외처리 - 입력된 숫자의 유효성 검사

function validation_check(name) {
  let left_page = name[0];
  let right_page = name[1];
  if (
    !check_odd_even(left_page, right_page) ||
    !check_one_differ(left_page, right_page) ||
    !check_range(left_page, right_page) ||
    !check_first_last(left_page, right_page)
  )
    return false;
  return true;
}

//예외처리 1번 조건 - 입력받은 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수여야함
function check_odd_even(left, right) {
  if (left % 2 === 0 || right % 2 === 1) return false;
  return true;
}

//예외처리 2번 조건 - 왼쪽 페이지와 오른쪽 페이지는 한 쪽 차이여야함.
function check_one_differ(left, right) {
  if (right - left !== 1) return false;
  return true;
}

//예외처리 3번 조건 - 왼쪽페이지 또는 오른쪽페이지는 1쪽 또는 400쪽이면 안됨. (시작 면이나 마지막 면이 나오지 않아야함)
function check_first_last(left, right) {
  if (left === 1 || right === 1 || left === 400 || right === 400) return false;
  return true;
}

//예외처리 4번 조건 - 모든 페이지는 1부터 400쪽 안에 있어야함.
function check_range(left, right) {
  if (left < 1 || right < 1 || left > 400 || right > 400) return false;
  return true;
}

module.exports = problem1;
