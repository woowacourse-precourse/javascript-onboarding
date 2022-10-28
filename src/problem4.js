const isAlphabet = (char) => {
  return /[a-zA-Z]/.test(char);
};
const isUpperCase = (char) => {
  return /[A-Z]/.test(char);
};

function problem4(word) {
  const UPPER_ASCII_A_Z = 155;
  const LOWER_ASCII_A_Z = 219;

  let answer = "";
  for (let currentChar = 0; currentChar < word.length; currentChar++) {
    if (!isAlphabet(word[currentChar])) {
      answer += word[currentChar];
      continue;
    }
    if (isUpperCase(word[currentChar]))
      answer += String.fromCharCode(
        UPPER_ASCII_A_Z - word.charCodeAt(currentChar)
      );

    if (!isUpperCase(word[currentChar]))
      answer += String.fromCharCode(
        LOWER_ASCII_A_Z - word.charCodeAt(currentChar)
      );
  }
  return answer;
}

module.exports = problem4;
