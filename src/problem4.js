function problem4(word) {
  const letters = word.split('');
  const encryptedLetters = letters.map((letter) => encryptLetter(letter));

  return encryptedLetters.join('');
}

function encryptLetter(letter) {
  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const LOWER = 'abcdefghijklmnopqrstuvwxyz'.split('');

  if (UPPER.includes(letter)) {
    const index = UPPER.indexOf(letter);
    const encryptedIndex = (UPPER.length - 1) - index;
    return UPPER[encryptedIndex];
  }
  if (LOWER.includes(letter)) {
    const index = LOWER.indexOf(letter);
    const encryptedIndex = (LOWER.length - 1) - index;
    return LOWER[encryptedIndex];
  }

  return letter;
}

module.exports = problem4;
