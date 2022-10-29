function problem4(word) {
  var answer;
  return answer;
}

function makeAlphabetArray() {
  const alphabet = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 65));
  return alphabet;
}

function makeReverseAlphabetArray() {
  const reverseAlphabet = makeAlphabetArray();
  reverseAlphabet.reverse();
  return reverseAlphabet;
}

module.exports = problem4;
