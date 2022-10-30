//문제 2 기능 목록
//1. 중복된 구간이 있는지 체크 (제거할 필요가 있는 문자열인가?)
//   -> 반복문 이용, 문자열의 중복된 부분 제외한 새로운 문자열 반환
//2. 중복된 구간이 있다면, 중복된 구간을 제외하고 새로운 문자열에 저장하기
//생각의 전환: 중복되지 않는다면, 내 앞뒤로 똑같은게 있으면 안돼.
function checkDuplicate(string){ //중복된 문자열이 있는지 체크
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
function deleteDuplicate(string){ //중복된 구간이 있다면, 중복된 구간을 제외하고 새로운 문자열에 저장하기
  var newString = "";
  for(i=0; i<string.length; i++){
    if (i == 0){ //문자열의 맨 첫 글자
      if(string[i] != string[i+1]){ //오른쪽 문자와 같지 않다면
        newString += string[i];
      }
    } else if(i == string.length-1){ //문자열의 맨 마지막 글자
      if(string[i]!=string[i-1]) { //왼쪽 문자와 같지 않다면
        newString += string[i];
      }
    } else {
      if (string[i] != string[i-1] && string[i] != string[i+1]){ //내 앞뒤로 중복되는 문자가 있으면 안돼!
        newString += string[i];
      }
    }
  }
  return newString; //중복 구간이 제거된 새로운 문자열
}

function problem2(cryptogram) {
  var answer;
  while(1) {
    if (checkDuplicate(cryptogram)){ //중복된 구간이 있는 문자열이라면
      console.log(cryptogram);
      cryptogram = deleteDuplicate(cryptogram); //중복 구간 제거
    } else break; //이제 중복된 구간 없으므로 반복문 탈출
  }
  answer = cryptogram;
  
  return answer;
}
//console.log(problem2("browoanoommnaon"))
console.log(problem2("zyelleyz"));
module.exports = problem2;
