function problem2(cryptogram) {
  var answer;
  let rslt;

  if (!checkValid(cryptogram)) return -1;   //예외처리

  rslt = checkStr(cryptogram)
  while (rslt != "" && rslt != -1) {
    cryptogram = rslt;
    rslt = checkStr(cryptogram)
  }

  if (rslt == "") answer = rslt;            //모두 제거된 경우
  else if (rslt == -1) answer = cryptogram; //연속되는 문자가 더이상 없는 경우

  return answer
}

function checkValid(str) {
  if (str.length <= 1 || str.length >= 1000) return false;  //문자열 길이는 1이하 1000이상일 수 없음

  const isLowerCase = str => str === str.toLowerCase();   //문자열은 소문자로 이루어져 있어야함.
  if (!isLowerCase) return false;
}

//연속되는 문자가 있는지 체크하는 함수
function checkStr(str) {
  let i = 0;
  for (; str[i] != str[i + 1] && str[i + 1] != '\0'; i++);
  
  //연속되는 문자 없이 끝까지 탐색했다면 false 반환
  if (i == str.length || str[i] != str[i + 1]) return -1;

  str = removeChars(str, i);
  return str;
}

//연속되는 문자 삭제하는 함수
function removeChars(str, i) {
  for (j = i + 1; str[i] == str[j];) 
    str = replaceAt(str, j, "");
    
  str = replaceAt(str, i, "");
  return str
}

//원하는 인덱스의 문자 삭제 함수
function replaceAt (input, index, character){
  return input.substr(0, index) + character + input.substr(index+1, input.length);
}

module.exports = problem2;

/*
1. 연속하는 문자열 체크하는 함수 생성
2. 1에서 나온 연속하는 부분을 제거하는 함수 생성
3. 체크 함수에 문자열이 끝났는지 여부 확인
4. 문자열 체크 함수를 실행하는 반복문 생성, 문자열이 끝난 경우 반복문 탈출
*/