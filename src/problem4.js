function problem4(word) {
  return word
    .split('')
    .map((x) => (alphabetCheck(x) ? frogDictionary(x) : x))
    .join('');
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
