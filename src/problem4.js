const ALPHABET = /^[a-z|A-Z]+$/;
const UPPER_ALPHABET = /^[A-Z]+$/;

const ASCII_UPPER_A = 65;
const ASCII_UPPER_Z = 90;

const ASCII_LOWER_A = 97;
const ASCII_LOWER_Z = 122;

function problem4(word) {
  let reverseStr = "";

  return reverseStr;
}

// 주어진 문자가 알파벳인지 확인하는 함수
function isAlphabet(char) {
  if (ALPHABET.test(char)) return true;
  else return false;
}

// 주어진 문자를 청개구리로 반환하는 함수
function reverseAlphabet(char) {
  if (UPPER_ALPHABET.test(char)) {
    return String.fromCharCode(
      ASCII_UPPER_Z - (char.charCodeAt() - ASCII_UPPER_A)
    );
  } else {
    return String.fromCharCode(
      ASCII_LOWER_Z - (char.charCodeAt() - ASCII_LOWER_A)
    );
  }
}

module.exports = problem4;
