function problem4(word) {
  var answer;
  return answer;
}

function isUpperCase(char) {
  const ascii = char.charCodeAt();
  if (ascii >= 65 && ascii <= 90) return true;
  return false;
}

function isLowerCase(char) {
  const ascii = char.charCodeAt();
  if (ascii >= 97 && ascii <= 122) return true;
  return false;
}

module.exports = problem4;
