/*
 기능 목록
  1) 숫자에 3, 6, 9가 들어가는지 체크 기능
  2) 3, 6, 9 가 들어간다면 몇번 들어가는지 횟수 체크 기능

*/

function numberCheck(n, c){

}

function numberInclude(n){
  let sum=0;
  let str=n.toString(10);
  if(str.includes('3')){
    sum+=numberCheck(n, '3');
  }
  if(str.includes('6')){
    sum+=numberCheck(n, '6');
  }
  if(str.includes('9')){
    sum+=numberCheck(n, '9');
  }
  return sum;
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
