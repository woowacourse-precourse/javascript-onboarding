function problem4(word) {
  var answer;
  return answer;
}

function frogDictionary(alphabet) {
  return alphabet === alphabet.toUpperCase()
    ? String.fromCharCode(155 - alphabet.charCodeAt(0))
    : String.fromCharCode(219 - alphabet.charCodeAt(0));
}

function alphabetCheck(alphabet) {
  return /[a-zA-Z]/.test(alphabet);
}

module.exports = problem4;
