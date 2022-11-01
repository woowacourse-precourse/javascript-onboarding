const Letter = Object.freeze({
  UPPER: 1,
  LOWER: 2,
  NON: 0
})

function isAlpha(char) {
  const upperRegExp = /[A-Z]/;
  const lowerRegExp = /[a-z]/;

  if (upperRegExp.test(char)) {
    return Letter.UPPER;
  }
  if (lowerRegExp.test(char)) {
    return Letter.LOWER;
  }
  return Letter.NON;
}

function convertChar(char) {
  let newCharCode;

  switch (isAlpha(char)) {
    case Letter.UPPER:
      newCharCode = 'A'.charCodeAt() + 'Z'.charCodeAt() - char.charCodeAt();
      break;
    case Letter.LOWER:
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
