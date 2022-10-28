/*
  기능 목록
  1. 대문자 판별하는 함수 is_upperCase() 구현
  2. 문자를 반대로 변환하는 함수 reverseChar() 구현
  3. 결과 출력
*/

// 대문자 1 소문자 0 공백 -1 리턴
function is_UpperCase(char) {
  if(char === ' ') return -1;
  if(char === char.toUpperCase()) return 1;
  return 0;
}
function reverseChar(char) {
  if(char === ' ') return ' ';  // 공백은 공백으로 리턴

  let result = '';
  let ascii = 0;
  if(is_UpperCase(char)) ascii = 65;
  else ascii = 97;

  let point = Math.abs(ascii - char.charCodeAt());  // 시작점으로부터 떨어진 거리
  let reverseCode = (ascii+25) - point; // 제일 끝에서 떨어진거리만큼 앞으로 이동
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
