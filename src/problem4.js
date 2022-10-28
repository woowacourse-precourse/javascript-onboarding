/*
 기능 목록
  1) 변환된 값 가져오는 기능
  2) 각 값들을 주어진 조건에 따라 값 변환 후 리턴
  3) 소문자와 대문자만 변환하도록 예외 처리

*/
function wordChange(c){
  let mn;
  if(c===c.toUpperCase()){
    mn= c-'A';
    mn=25-mn;
    mn=mn+'A';
  }else{
    mn= c-'a';
    mn=25-mn
    mn=mn+'a';
  }
  return mn;
}

function exceptHandling(c){
  if(c>='A'&&c<='Z') return 1;
  else if(c>='a'&&c<='z') return 1;
  else return 0;
}

function getStr(w){
  let str=''
  for(let c of w){
    if(exceptHandling(c)){
      str+=wordChange(c);
    }else{
      str+=c;
    }
  }
  return str;
}

function problem4(word) {
  var answer;
  answer = getStr(word)
  return answer;
}

module.exports = problem4;
