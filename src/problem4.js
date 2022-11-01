/*
  기능 목록
  1. 문자가 알파벳인지 판별하는 is_alphabet() 함수
  1. 대문자 판별하는 함수 is_upperCase() 함수
  2. 알파벳문자를 반대로 변환하는 함수 reverseChar() 함수
  3. 결과 출력
*/

function is_alphabet(char) {
  let regAlpha = /^[a-zA-Z]*$/; 
  if(regAlpha.test(char)) return true; 
  else return false; 
}

function is_UpperCase(char) {
  if(char === char.toUpperCase()) return 1;
  return 0;
}

function reverseChar(char) {
  let charAsciiCode = char.charCodeAt();
  // 공백은 공백으로, 알파벳 외의 문자는 변환 x
  if(char == ' ') return ' ';
  if(!is_alphabet(char)) return char;
  
  let result = '' ,ascii = 0;
  // 대문자는 아스키코드 65부터 , 소문자는 97부터 이므로 해당 값 설정
  if(is_UpperCase(char)) ascii = 65;
  else ascii = 97;

  let distance = Math.abs(ascii - charAsciiCode);  // 시작점으로부터 떨어진 거리
  let reverseCode = (ascii+25) - distance; // 반대편에서 떨어진거리만큼 앞으로 이동
  result = String.fromCharCode(reverseCode);

  return result;
}

function problem4(word) {
  let answer = '';
  for(let i =0; i<word.length; i++) {
    answer += reverseChar(word[i]);
  }
  return answer;
}

module.exports = problem4;
