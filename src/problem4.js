const ASCII_UPPER_A = 65;
const ASCII_UPPER_Z = 90;
const ASCII_LOWER_A = 97;
const ASCII_LOWER_Z = 122;

const isAlpha = (char) => char.match(/[a-zA-Z]/i);

const isUpperCase = (code) => code <= ASCII_UPPER_Z;

const getFrogChar = (char) => {
  if (!isAlpha(char)) return char;

  const asciiCode = char.charCodeAt(0);

  return isUpperCase(asciiCode)
    ? String.fromCharCode(ASCII_UPPER_A + ASCII_UPPER_Z - asciiCode)
    : String.fromCharCode(ASCII_LOWER_A + ASCII_LOWER_Z - asciiCode);
};

const problem4 = (word) => {
  return word
    .split('')
    .map((char) => getFrogChar(char))
    .join('');
};

module.exports = problem4;
