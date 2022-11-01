/*
  기능1: 중복 문자 제거
  기능2: 중복 문자가 없을 때까지 중복문자 제거 함수 실행
*/

function problem2(cryptogram) {
  var answer;
  var beforeStr = cryptogram;

  while (true) {
    afterStr = deleteChar(beforeStr);
    if (afterStr === beforeStr) {
      answer = afterStr;
      break;
    }

    beforeStr = afterStr;
  }
  return answer;
}

//중복 문자 제거 함수
function deleteChar(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      result += str[i];
    } else {
      i += 1;
    }
  }
  return result;
}

module.exports = problem2;
