function problem1(pobi, crong) {
  var answer;
  let pobi_score;
  let crong_score;
  if (!validation_check(pobi) || !validation_check(crong)) return -1;
  else {
    pobi_score = calcScore(pobi);
    crong_score = calcScore(crong);
    answer = compare_Score(pobi_score, crong_score);
  }
  return answer;
}
//출력값 : 포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때, 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return 하도록 solution 메서드를 완성하라.
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

//페이지 번호의 각 자리 숫자를 모두 더하는 기능
function calcSum(page_num) {
  let sum = 0;
  for (let i = 0; i < page_num.toString().length; i++) {
    sum += parseInt(page_num.toString()[i]);
  }
  return sum;
}

//페이지 번호의 각 자리 숫자를 모두 곱하는 기능
function calcMultiplication(page_num) {
  let mult = 1;
  for (let i = 0; i < page_num.toString().length; i++) {
    mult *= parseInt(page_num.toString()[i]);
  }
  return mult;
}

//페이지 각 자리수를 더한것과 곱한 것 중 더 큰 수를 구하는 기능
function select_page_bign(sum, mult) {
  let max = 0;
  if (sum >= mult) max = sum;
  else max = mult;
  return max;
}

//왼쪽 페이지와 오른쪽 페이지 중 더 큰 수를 비교하고, 이를 본인 점수로 저장하는 경우
function calcScore(name) {
  let left = name[0];
  let right = name[1];
  let left_score = select_page_bign(calcSum(left), calcMultiplication(left));
  let right_score = select_page_bign(calcSum(right), calcMultiplication(right));
  let score = 0;
  if (left_score >= right_score) score = left_score;
  else score = right_score;
  return score;
}

//두명의 점수를 비교하는 함수
//포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0
function compare_Score(pobi, crong) {
  let compare;
  if (pobi === crong) compare = 0;
  else if (pobi > crong) compare = 1;
  else compare = 2;
  return compare;
}

module.exports = problem1;
