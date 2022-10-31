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

const convertLetter = letter => {
  if (!checkLetterIsAlphabet(letter)) return letter;

  const isLetterUpper = checkLetterIsUpperCase(letter);

  if (isLetterUpper) {
    const idx = UPPERCASE.split('').indexOf(letter);
    return UPPERCASE[25 - idx];
  }

  const idx = LOWERCASE.split('').indexOf(letter);
  return LOWERCASE[25 - idx];
};

const checkLetterIsAlphabet = letter => {
  const ALPHABET_REGEX = /[a-zA-z]/;
  return letter.match(ALPHABET_REGEX);
};

const checkLetterIsUpperCase = letter => letter === letter.toUpperCase();

module.exports = problem4;
