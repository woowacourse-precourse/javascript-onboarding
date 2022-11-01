/*
  기능 목록
  1. 대문자 판별하는 함수 is_upperCase() 구현
  2. 알파벳문자를 반대로 변환하는 함수 reverseChar() 구현
  3. 결과 출력
*/

function is_UpperCase(char) {
  if(char === char.toUpperCase()) return 1;
  return 0;
}
function reverseChar(char) {
  let charAsciiCode = char.charCodeAt();
  // 알파벳 외의 문자는 변환 x
  if(charAsciiCode <65 || charAsciiCode>90 || charAsciiCode<97 || charAsciiCode>122) {  
    return char;
  }
  let result = '' ,ascii = 0;
  // 대문자는 아스키코드 65부터 , 소문자는 97부터 이므로 해당 값 설정
  if(is_UpperCase(char)) ascii = 65;
  else ascii = 97;

  let point = Math.abs(ascii - charAsciiCode);  // 시작점으로부터 떨어진 거리
  let reverseCode = (ascii+25) - point; // 반대편에서 떨어진거리만큼 앞으로 이동
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
