// 기능 목록
// 1. 문자열 분해
// 2. 중복 검사

// 문자열 분해
function splitString(cryptogram) {
  // 문자를 전부 분해하여 리스트로 반환
  return cryptogram.split('');
}

function problem2(cryptogram) {
  let answer;
  // 분해한 문자열을 변수에 할당
  let string_list = splitString(cryptogram);
  return answer;
}

module.exports = problem2;
