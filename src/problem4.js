/**
 * checks if the character is alphabet.
 * @param {string} character given character or length 1
 * @returns {boolean} whether the given character is alphabet or not
 */
function isAlphabet(character) {
  return character.match(/[a-z]/i);
}

/**
 * reverse the given character (if it is an alphabet) according to given table
 * @param {string} character given character or length 1
 * @returns {string} reversed character
 */
function reverseCharacter(character) {
  if (!isAlphabet(character)) return character;
  if (character.toLowerCase() === character) {
    return String.fromCharCode(
      "z".charCodeAt(0) - character.charCodeAt(0) + "a".charCodeAt(0)
    );
  }
  if (character.toUpperCase() === character) {
    return String.fromCharCode(
      "Z".charCodeAt(0) - character.charCodeAt(0) + "A".charCodeAt(0)
    );
  }
  return "";
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
