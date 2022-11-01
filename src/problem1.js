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
    return -1;
  
  if (lst[LEFT_PAGE]%2 != 1 || lst[RIGHT_PAGE]%2 != 0)
    return -1;
  
  if (lst[LEFT_PAGE] <= START_PAGE || lst[RIGHT_PAGE] >= FINISH_PAGE)
    return -1;
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
  return answer;
}

module.exports = problem1;
