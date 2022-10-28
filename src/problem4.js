const LOWER_A_ASCII = 65;
const LOWER_Z_ASCII = 90;
const LOWER_A_PLUS_Z = 155;
const UPPER_A_ASCII = 97;
const UPPER_Z_ASCII = 122;
const UPPER_A_PLUS_Z = 219;

const asciiToReversedChar = (ascii) => {
  if (ascii >= LOWER_A_ASCII && ascii <= LOWER_Z_ASCII) {
    return String.fromCharCode(LOWER_A_PLUS_Z - ascii);
  } else if (ascii >= UPPER_A_ASCII && ascii <= UPPER_Z_ASCII) {
    return String.fromCharCode(UPPER_A_PLUS_Z - ascii);
  } else {
    return String.fromCharCode(ascii);
  }
};

const charToAscii = (char) => char.charCodeAt();

function problem4(word) {
  let reversedWord = [...word].reduce((acc, cur) => {
    const ascii = charToAscii(cur);
    acc += asciiToReversedChar(ascii);
    return acc;
  }, '');

  return reversedWord;
}

module.exports = problem4;
