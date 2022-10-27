// 기능 목록
// 1. 문자열 분해
// 2. 분해한 문자열 순회
// 3. 중복 검사

// 분해한 문자열 순회
function stringTraversal(string_list) {
  // 결과 값을 할당할 변수
  let string_result = '';
  // 순회 할 인덱스
  let check_index = 0;

  // check_index와 그 다음 값을 확인하므로 리스트 길이의 -1보다 작을때까지 반복
  while (check_index < string_list.length - 1) {
    // 중복 검사
  }
  return string_result;
}

// 문자열 분해
function splitString(cryptogram) {
  // 문자를 전부 분해하여 리스트로 반환
  return cryptogram.split('');
}

function problem2(cryptogram) {
  let answer;
  // 분해한 문자열을 변수에 할당
  let string_list = splitString(cryptogram);
  // 분해한 문자열 리스트를 순회하여 결과값을 재할당
  answer = stringTraversal(string_list);
  return answer;
}

module.exports = problem2;
