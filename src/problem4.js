function frogDictionary(letter) {
  const mid = letter === letter.toUpperCase() ? "M" : "m";
  const midCode = mid.charCodeAt(0);
  const letterCode = letter.charCodeAt(0);

  return 2 * midCode - letterCode + 1;
}

function problem4(word) {
  const result = word
    .replace(/[a-zA-Z]/g, (letter) => String.fromCharCode(frogDictionary(letter)));
    
  return result;
}

module.exports = problem4;
