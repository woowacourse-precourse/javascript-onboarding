const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';

function problem4(word) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    result += convertLetter(letter);
  }

  return result;
}

function convertLetter(letter) {
  if (letter === ' ') return letter;

  const isLetterUpper = checkLetterIsUpperCase(letter);

  if (isLetterUpper) {
    const idx = UPPERCASE.split('').indexOf(letter);
    return UPPERCASE[25 - idx];
  }

  const idx = LOWERCASE.split('').indexOf(letter);
  return LOWERCASE[25 - idx];
}

function checkLetterIsUpperCase(letter) {
  if (letter === letter.toUpperCase()) return true;
  return false;
}

module.exports = problem4;
