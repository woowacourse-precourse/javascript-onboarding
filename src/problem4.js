function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;

// check if string is an alphabet
function isAlphabet(str, alphabet) {
  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}

// check if string is an uppercase alphabet
function isUpperCase(str) {
  return str === str.toUpperCase();
}
