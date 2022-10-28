// 1. 주어진 word를 리스트 화
// 2. 아스키로 변환
// 3. 알파벳 인지 판별
// 4. 대문자, 소문자 구별
// 5. case에 맞게 청개구리 변환
// 6. 다시 문자열로 변환

// 문자 -> 아스키 변환
function strToAsc(str) {
  return str.charCodeAt();
}

// 아스키 -> 문자 변환
function ascToStr(asc) {
  return String.fromCharCode(asc);
}

// 알파벳 check
function isChar(asc) {
  if ((asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) return true;
}

// Lower
function isLower(asc) {
  if (asc >= 97 && asc <= 122) return true;
}

// Lower case Frog 변환
function lowerFrog(num) {
  return 219 - num;
}

// upper case Frog 변환
function upperFrog(num) {
  return 155 - num;
}

function problem4(word) {
  var answer;
  // 리스트화
  const wordList = word.split("");

  return answer;
}

module.exports = problem4;
