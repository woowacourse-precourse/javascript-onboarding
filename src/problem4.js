const CHAR_LNEGTH = 26;
const CHAR_ARR = new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97))
  .join("");

const isAlphabet = (char) => {
  return char.match(/[a-zA-z]/) ? true : false;
};

const isUpperCase = (char) => {
  return char.match(/[A-Z]/) ? true : false;
};

const convertChar = (char) => {
  const idx = CHAR_ARR.indexOf(char.toLowerCase());
  const convertedChar = CHAR_ARR[CHAR_LNEGTH - idx - 1];
  return isUpperCase(char) ? convertedChar.toUpperCase() : convertedChar;
};

function problem4(word) {
  let answer = "";
  [...word].forEach((char) => {
    if (!isAlphabet(char)) {
      answer += char;
      return;
    }
    answer += convertChar(char);
  });
  return answer;
}

module.exports = problem4;
