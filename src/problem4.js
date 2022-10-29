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

function recordCapitalAlphabet(word) {
  const wordArray = word.split("");
  const recordCapital = wordArray.map((i) => i === i.toUpperCase());
  return recordCapital;
}

module.exports = problem4;
