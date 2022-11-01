/*
기능 목록
1. 페이지 예외처리 기능
2. 각 페이지의 자리 숫자 구하는 기능
3. 자리 숫자를 더하는 기능
4. 자리 숫자를 곱하는 기능
5. 점수 비교 후 이긴 사람 찾기
*/

const LEFT_PAGE = 0;
const RIGHT_PAGE = 1;
const START_PAGE = 1; 
const FINISH_PAGE = 400;
const POBI_WIN = 1;
const CRONG_WIN = 2;
const DRAW = 0;

function exception(lst) {
  if (lst[RIGHT_PAGE] - lst[LEFT_PAGE] != 1)
    return true;
  
  if (lst[LEFT_PAGE]%2 != 1 || lst[RIGHT_PAGE]%2 != 0)
    return true;
  
  if (lst[LEFT_PAGE] <= START_PAGE || lst[RIGHT_PAGE] >= FINISH_PAGE)
    return true;
  
  return false;
}

function digit(num) {
  var num_lst = [];
  while(num) {
    num_lst.push(num%10);
    num = parseInt(num/10);
  }

  return num_lst;
}

function plus(lst) {
  return lst.reduce((a,b) => (a+b));
}

function multiple(lst) {
  return lst.reduce((a,b) => (a*b));
}

function find_winner(pobi_score, crong_score) {
  if (pobi_score > crong_score)
    return POBI_WIN;
  else if (pobi_score < crong_score)
    return CRONG_WIN;
  else
    return DRAW;
}

function problem1(pobi, crong) {
  var answer;
  if (exception(pobi) || exception(crong))
    answer = -1;
  else {
    var pobi_left = digit(pobi[LEFT_PAGE]);
    var pobi_right = digit(pobi[RIGHT_PAGE]);
    var crong_left = digit(crong[LEFT_PAGE]);
    var crong_right = digit(crong[RIGHT_PAGE]);

    var pobi_left_score_plus = plus(pobi_left);
    var pobi_left_score_multiple = multiple(pobi_left);
    var pobi_right_score_plus = plus(pobi_right);
    var pobi_right_score_multiple = multiple(pobi_right);

    var pobi_score = Math.max(pobi_left_score_plus, pobi_left_score_multiple, pobi_right_score_plus, pobi_right_score_multiple);

    var crong_left_score_plus = plus(crong_left);
    var crong_left_score_multiple = multiple(crong_left);
    var crong_right_score_plus = plus(crong_right);
    var crong_right_score_multiple = multiple(crong_right);

    var crong_score = Math.max(crong_left_score_plus, crong_left_score_multiple, crong_right_score_plus, crong_right_score_multiple);

    answer = find_winner(pobi_score, crong_score);

  }

  return answer;
}

module.exports = problem1;
