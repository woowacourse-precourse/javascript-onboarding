// 0. 문자열 길이 검사
// 1. 문자를 조건에 맞게 변환하는 함수 구현
// 2. 변환 후 반환

function validInputCheck(word) {
  if (word.length < 1 || word.length > 1000) {
    return -1;
  }
  return 0;
}

// ASCII CODE
// A = 65
// Z = 90
// a = 97
// z = 122
function charToAscii(char) {
  let ret;

  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    ret = 90 - (char.charCodeAt(0) - 65);
  } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    ret = 122 - (char.charCodeAt(0) - 97);
  } else {
    ret = char.charCodeAt(0);
  }
  return ret;
}

function getResult(word) {
  let ret = "";

  for (let index = 0; index < word.length; index++) {
    ret = ret + String.fromCharCode(charToAscii(word[index]));
  }
  return ret;
}

function problem4(word) {
  if (validInputCheck(word) < 0) {
    return "Argument Error";
  }
  var answer = getResult(word);

  return answer;
}

module.exports = problem4;
