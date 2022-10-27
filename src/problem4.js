/**
 * @param {string} character
 * @returns {string}
 */
function convertCharacter(character) {
  const charCode = character.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(65 - charCode + 90);
  }

  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(97 - charCode + 122);
  }

  return character;
}

/**
 * @param {string} word
 * @returns {string}
 */
function problem4(word) {
  let answer = '';

  for (let i = 0; i < word.length; i++) {
    answer += convertCharacter(word[i]);
  }

  return answer;
}

module.exports = problem4;
