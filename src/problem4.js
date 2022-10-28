function frogDictionary(letter, mid) {
  const letterCode = letter.charCodeAt(0);
  const midCode = mid.charCodeAt(0);

  return 2 * midCode - letterCode + 1;
}

function problem4(word) {
  const result = word
    .replace(/[a-z]/g, (letter) => String.fromCharCode(frogDictionary(letter, "m")))
    .replace(/[A-Z]/g, (letter) => String.fromCharCode(frogDictionary(letter, "M")));
    
  return result;
}

module.exports = problem4;
