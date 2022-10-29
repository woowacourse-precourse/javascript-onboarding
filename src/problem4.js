function problem4(word) {
  var answer;
  return answer;
}

function checkAlphabet(char) {
  const regexp = new RegExp(/[a-zA-Z]/);
  return regexp.test(char);
}

function reverseAlphabet(char) {
  const isLowerCase = char === char.toLowerCase();
  const start = isLowerCase ? 'a'.charCodeAt() : 'A'.charCodeAt();
  const end = isLowerCase ? 'z'.charCodeAt() : 'Z'.charCodeAt();
  const reverseCharCode = start + end - char.charCodeAt();

  return String.fromCharCode(reverseCharCode);
}

module.exports = problem4;
