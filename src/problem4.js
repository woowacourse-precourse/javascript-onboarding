/*
[기능목록]
- 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.
1. 대문자인지, 소문자인지 확인
2. 아스키코드값을 이용해 a-z를 뒤집어 변환


*/

function isUpper(word) {
  let str = word[0];
  if(str === str.toUpperCase()) {
    return true;
  }
  return false;
}


function isLower(word) {
  let str = word[0];
  if(str === str.toLowerCase()) {
    return true;
  }
  return false;
}


function problem4(word) {
  let answer;
  answer = process(word);
  return answer;
}

module.exports = problem4;

