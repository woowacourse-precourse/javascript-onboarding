// 소문자, 대문자, 그외 문자를 판별하는 함수 구현
// 문자를 변환하는 함수 구현
// 구현된 함수를 사용하여 problem4 함수 구현

function checkChar(char) {
  const asciCode = char.charCodeAt();
  if (asciCode >= 65 && asciCode <= 90) {
    return 1;
  } else if (asciCode >= 97 && asciCode <= 122) {
    return 2;
  } else {
    return 0;
  }
}

function replaceChar(char, type) {
  if (type === 1) {
    return String.fromCharCode(155 - char.charCodeAt());
  } else if (type === 2) {
    return String.fromCharCode(219 - char.charCodeAt());
  } else {
    return char;
  }
}

function problem4(word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    result.push(replaceChar(word[i], checkChar(word[i])));
  }
  return result.join("");
}

module.exports = problem4;
