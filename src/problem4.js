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

function problem4(word) {
  let answer = '';

  return answer;
}

module.exports = problem4;
