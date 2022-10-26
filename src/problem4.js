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
  char = char.toLowerCase();
  const idx = CHAR_ARR.indexOf(char);
  return CHAR_ARR[CHAR_LNEGTH - idx - 1];
};

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
