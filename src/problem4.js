const ASCII_UPPERCASE_A = 65;
const ASCII_UPPERCASE_Z = 90;
const ASCII_LOWERCASE_A = 97;
const ASCII_LOWERCASE_Z = 122;

function isUpperCase(char) {
  return (
    ASCII_UPPERCASE_A <= char.charCodeAt(0) &&
    char.charCodeAt(0) <= ASCII_UPPERCASE_Z
  );
}

function isLowerCase(char) {
  return (
    ASCII_LOWERCASE_A <= char.charCodeAt(0) &&
    char.charCodeAt(0) <= ASCII_LOWERCASE_Z
  );
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
