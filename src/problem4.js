const UPPER_ALPHABET = /^[A-Z]+$/;
const LOWER_ALPHABET = /^[a-z]+$/;
const ASCII_UPPER_A = 65;
const ASCII_UPPER_Z = 90;
const ASCII_LOWER_A = 97;
const ASCII_LOWER_Z = 122;

function problem4(word) {
  return word
    .split("")
    .map((char) => reverseAlphabet(char))
    .join("");
}

// 주어진 문자를 청개구리로 반환하는 함수
function reverseAlphabet(char) {
  if (UPPER_ALPHABET.test(char)) {
    return String.fromCharCode(
      ASCII_UPPER_Z - (char.charCodeAt() - ASCII_UPPER_A)
    );
  } else if (LOWER_ALPHABET.test(char)) {
    return String.fromCharCode(
      ASCII_LOWER_Z - (char.charCodeAt() - ASCII_LOWER_A)
    );
  } else {
    return char;
  }
}

module.exports = problem4;
