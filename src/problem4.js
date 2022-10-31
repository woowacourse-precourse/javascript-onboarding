/**
 * @param {string} letter
 * @returns {string}
 */
function froggieTransform(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseAlphabet = alphabet.toUpperCase();
  const froggieMap = new Map();
  for (let i = 0; i < alphabet.length; i++) {
    froggieMap.set(alphabet[i], alphabet[alphabet.length - 1 - i]);
    froggieMap.set(
      uppercaseAlphabet[i],
      uppercaseAlphabet[alphabet.length - 1 - i]
    );
  }
  return froggieMap.get(letter) ?? letter;
}

function problem4(word) {
  return [...word].map(froggieTransform).join("");
}

module.exports = problem4;
