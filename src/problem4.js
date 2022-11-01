const CHAR_LENGTH = 26;
const charArr = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97));

const isAlphabet = (char) => {
  return char.match(/[a-zA-Z]/) ? true : false;
};

const isUpperCase = (char) => {
  return char.match(/[A-Z]/) ? true : false;
};

const convertChar = (char) => {
  const idx = charArr.indexOf(char.toLowerCase());
  const convertedChar = charArr[CHAR_LENGTH - idx - 1];

  return isUpperCase(char) ? convertedChar.toUpperCase() : convertedChar;
};

function problem4(word) {
  let convertedWord = "";
  [...word].forEach((char) => {
    if (!isAlphabet(char)) {
      convertedWord += char;
    } else {
      convertedWord += convertChar(char);
    }
  });

  return convertedWord;
}

module.exports = problem4;
