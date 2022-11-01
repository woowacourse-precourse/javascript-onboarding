const UPPER_CASE_START = 65;
const LOWER_CASE_START = 97;
const UPPER_CASE_END = 90;
const LOWER_CASE_END = 122;

/**
 * @param {string} character
 * @returns {boolean}
 */
function isUpperCase(character) {
  return character >= 65 && character <= 90;
}

/**
 * @param {string} character
 * @returns {boolean}
 */
function isLowerCase(character) {
  return character >= 97 && character <= 122;
}

/**
 * @param {string} character
 * @returns {string}
 */
function convertCharacter(character) {
  const charCode = character.charCodeAt(0);

  if (isUpperCase(charCode)) {
    return String.fromCharCode(UPPER_CASE_START - charCode + UPPER_CASE_END);
  }

  if (isLowerCase(charCode)) {
    return String.fromCharCode(LOWER_CASE_START - charCode + LOWER_CASE_END);
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
