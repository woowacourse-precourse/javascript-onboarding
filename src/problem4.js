// ASCII 코드
// 대문자 : 65 ~ 90
// 소문자 : 97 ~ 122
// 32 : Space
function problem4(word) {
  var answer;
  let list = [];
  list = wordToASCII(word);
  return answer;
}

function wordToASCII(word) {
  // word를 ASCII 코드로 변환하는 함수.
  let arrayASCII = [];
  for (item of word) {
    arrayASCII.push(item.charCodeAt(0));
  }
  return arrayASCII;
}

module.exports = problem4;
