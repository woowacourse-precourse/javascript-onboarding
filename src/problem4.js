function problem4(word) {
  var answer;
  return answer;
}

function frogDictionary(alphabet) {
  return alphabet === alphabet.toUpperCase()
    ? String.fromCharCode(155 - alphabet.charCodeAt(0))
    : String.fromCharCode(219 - alphabet.charCodeAt(0));
}

module.exports = problem4;
