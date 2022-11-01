const isAlphabet = (char) => {
  return /[a-zA-Z]/.test(char);
};
const isUpperCase = (char) => {
  return /[A-Z]/.test(char);
};
const isLowerCase = (char) => {
  return /[a-z]/.test(char);
};

const getConvertedCharacter = (char) => {
  const UPPER_ASCII_A_Z = 155;
  const LOWER_ASCII_A_Z = 219;

  let convertedChar;

  if (!isAlphabet(char)) {
    convertedChar = char;
  }
  if (isUpperCase(char)) {
    convertedChar = String.fromCharCode(UPPER_ASCII_A_Z - char.charCodeAt());
  }
  if (isLowerCase(char)) {
    convertedChar = String.fromCharCode(LOWER_ASCII_A_Z - char.charCodeAt());
  }

  return convertedChar;
};

function problem4(word) {
  let answer = "";
  for (let currentChar of word) {
    answer += getConvertedCharacter(currentChar);
  }

  return answer;
}

module.exports = problem4;
