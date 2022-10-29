function problem2(cryptogram) {
  var answer;
  return answer;
}

//연속되는 문자가 있는지 체크하는 함수
function checkStr(str) {
  for (i = 0; str[i] != str[i + 1] && str[i + 1] != '\0'; i++);
  str = removeChars(str, i)
}

//연속되는 문자 삭제하는 함수
function removeChar(str, i) {
  for (j = i + 1; str[i] == str[j]; j++) 
    str = str.replace(str[j], "");
  str = str.replace(str[i], "");

  return str
}

module.exports = problem2;

/*
1. 연속하는 문자열 체크하는 함수 생성
2. 1에서 나온 연속하는 부분을 제거하는 함수 생성
3. 체크 함수에 문자열이 끝났는지 여부 확인
4. 문자열 체크 함수를 실행하는 반복문 생성, 문자열이 끝난 경우 반복문 탈출
*/