problem4("a");

function problem4(word) {
  var answer;
  // 문자열을 문자로 split
  for (let i = 0; i < word.length; i++) {}
  // 변환된 문자열을 붙이기
  changeWord("A");

  return answer;
}

// ASCII를 사용하여 문자 변환하는 함수
function changeWord(letter) {
  let changeLetter = "";
  let ascii = letter.charCodeAt(0);

  // 대문자 (65~90)
  if (ascii >= 65 && ascii <= 90) {
    changeLetter = String.fromCharCode(155 - ascii);
  }
  // 소문자 (97~122)
  if (ascii >= 97 && ascii <= 122) {
    changeLetter = String.fromCharCode(219 - ascii);
  }

  // 예외처리 (띄어쓰기)
  if (letter === " ") {
    changeLetter === " ";
  }

  return changeLetter;
}

module.exports = problem4;
