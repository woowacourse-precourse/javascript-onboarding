/*
  기능1: 글자 한개를 반대 글자로 변환 하는 기능
*/

function problem4(word) {
  var answer = '';
  for (var char of word) {
    answer += changeChar(char);
  }
  return answer;
}

// 반대 글자로 변환
function changeChar(char) {
  //아스키 코드로 변환
  var code = char.charCodeAt(0);
  var reverseCode;

  //반대 글자로 변환
  if (code >= 65 && code <= 90) {    //대문자
    reverseCode = 90 - (code - 65);
  } else if (code >= 97 && code <= 122) {   //소문자
    reverseCode = 122 - (code - 97);
  } else {    //알파벳 아닐 경우
    return char;
  }

  return String.fromCharCode(reverseCode);
}

module.exports = problem4;
