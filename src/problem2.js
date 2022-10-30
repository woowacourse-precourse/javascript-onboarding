//문제 2 기능 목록
//1. 중복된 구간이 있는지 체크 (제거할 필요가 있는 문자열인가?)
//   -> 반복문 이용, 문자열의 중복된 부분 제외한 새로운 문자열 반환
//2. 중복된 구간이 있다면, 중복된 구간을 제외하고 새로운 문자열에 저장하기
//생각의 전환: 중복되지 않는다면, 내 앞뒤로 똑같은게 있으면 안돼.

function checkDuplicate(string){ //중복된 구간이 있는지 체크
  var flag = 0;
  for(i=0; i<string.length; i++){
    if (i == 0){ //문자열의 맨 첫 글자
      if(string[i] == string[i+1]){
        return true;
      }
    } else if(i == string.length-1){ //문자열의 맨 마지막 글자
      if(string[i]==string[i-1]) {
        return true;
      }
    } else {
      if (string[i] == string[i-1] || string[i] == string[i+1]){
        return true;
      }
    }
  }
}

function problem2(cryptogram) {
  var answer;
 
  if (checkDuplicate(cryptogram)){
      console.log(cryptogram);
      //cryptogram = deleteDuplicate(cryptogram);
  } 
  
  answer = cryptogram;
  
  return answer;
}
//console.log(problem2("browoanoommnaon"))
console.log(problem2("zyelleyz"));
module.exports = problem2;
