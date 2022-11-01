/*
  기능 목록
  1. 현재 문자열에 연속하는 중복문자가 있는 지 확인한다.
  2. 연속하는 중복문자가 있으면 중복문자를 제거한다.
  3. 제거후 반환한 문자열을 다시 1번부터 반복한다.
  4. 연속하는 중복문자가 없으면 문자열을 반환한다.
*/ 
function problem2(cryptogram) {
  var answer;
  return answer;
}

function isDuplicate(input) {
  // 연속으로 중복된 문자가 있는지 확인하는 함수
  for (i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      return true;
    }
  }
  return false;
}


module.exports = problem2;
