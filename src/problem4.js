const ASCII_UPPER_A = 65;
const ASCII_UPPER_Z = 90;
const ASCII_LOWER_A = 97;
const ASCII_LOWER_Z = 122;

const isUpperCase = (char) => char.match(/[A-Z]/);

const getFrogChar = (char) => {
  const asciiCode = char.charCodeAt(0);

  return isUpperCase(char)
    ? String.fromCharCode(ASCII_UPPER_A + ASCII_UPPER_Z - asciiCode)
    : String.fromCharCode(ASCII_LOWER_A + ASCII_LOWER_Z - asciiCode);
};

const problem4 = (word) => word.replace(/[a-zA-Z]/g, getFrogChar);

module.exports = problem4;
