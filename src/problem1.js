/*
기능 목록
1. 페이지 예외처리 기능
2. 각 페이지의 자리 숫자 구하는 기능
3. 자리 숫자를 더하는 기능
4. 자리 숫자를 곱하는 기능
5. 가장 큰 수를 찾는 기능
*/

const LEFT_PAGE = 0;
const RIGHT_PAGE = 1;
const START_PAGE = 1; 
const FINISH_PAGE = 400;

function exception(lst) {
  if (lst[RIGHT_PAGE] - lst[LEFT_PAGE] != 1)
    return -1;
  
  if (lst[LEFT_PAGE]%2 != 1 || lst[RIGHT_PAGE]%2 != 0)
    return -1;
  
  if (lst[LEFT_PAGE] <= START_PAGE || lst[RIGHT_PAGE] >= FINISH_PAGE)
    return -1;
}


function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
