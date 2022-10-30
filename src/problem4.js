function isAlpha(char) {
  const upperRegExp = /[A-Z]/;
  const lowerRegExp = /[a-z]/;

  if (upperRegExp.test(char)) {
    return 1;
  }
  if (lowerRegExp.test(char)) {
    return 2;
  }
  return 0;
}

function convertChar(char) {
  let newCharCode;

  switch (isAlpha(char)) {
    case 1:
      newCharCode = 'A'.charCodeAt() + 'Z'.charCodeAt() - char.charCodeAt();
      break;
    case 2:
      newCharCode = 'a'.charCodeAt() + 'z'.charCodeAt() - char.charCodeAt();
      break;
    default:
      return char;
  }
  return String.fromCharCode(newCharCode);
}

function problem4(word) {
  var answer = "";

  for (const char of word) {
    answer += convertChar(char);
  }
  return answer;
}

module.exports = problem4;
