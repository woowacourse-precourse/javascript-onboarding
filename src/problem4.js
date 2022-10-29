/*
[기능목록]
- 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.
1. 대문자 확인
2. 소문자 확인
3. 아스키코드값을 이용해 a-z를 뒤집어 변환
4. 문자 하나씩 뒤집기
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

function reverseAlphabet(str){
  let first = 0;
  let end = 0;
  if(isUpper(str)){
    first = 65;
    end = 90;
  } else if(isLower(str)){
    first = 97;
    end = 122;
  }
  let interval = str.charCodeAt() - first;
  return String.fromCharCode(end-interval);
}


function process(word){
  let result = "";
  for(let i = 0; i < word.length; i++){
    if(word[i] !== " "){
      result += reverseAlphabet(word[i]);
    } else {
      result += word[i];
    }
  }
  return result;
}


function problem4(word) {
  let answer;
  answer = process(word);
  return answer;
}

module.exports = problem4;

