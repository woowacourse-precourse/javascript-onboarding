// 기능 목록
// 1. 문자열 분해
// 2. 분해한 문자열 순회
// 3. 중복 검사 -> 중복된 문자가 3개 이상일 경우도 예외처리

// 중복 검사
function checkDuplicate(string_list, check_index) {
  let count = 1;
  let check_char = string_list[check_index];
  for(let i = check_index + 1; i < string_list.length; i++){
    if(string_list[i] !== check_char) break;
    count++;
  }
  return count > 1?count:false;
}

// 분해한 문자열 순회
function stringTraversal(string_list) {
  // 결과 값을 할당할 변수
  let string_result = '';
  // 순회 할 인덱스
  let check_index = 0;

  // check_index와 그 다음 값을 확인하므로 리스트 길이의 -1보다 작을때까지 ㅏ
  while (check_index < string_list.length - 1) {
    // 문자열 중복 검사
    let counted = checkDuplicate(string_list, check_index);
    if(counted){
      string_list.splice(check_index, counted);
      check_index = check_index - 1 < 0 ? 0 : check_index - 1;
    }
    else check_index++;
  }
  // 남은 리스트 원소들을 합하여 반환
  string_result = string_list.join('');
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