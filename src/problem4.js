const encryptLetter = (letter) => {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  if (upperCaseLetters.includes(letter)) {
    const index = upperCaseLetters.indexOf(letter);
    const encryptedIndex = (upperCaseLetters.length - 1) - index;
    
    return upperCaseLetters[encryptedIndex];
  }

  if (lowerCaseLetters.includes(letter)) {
    const index = lowerCaseLetters.indexOf(letter);
    const encryptedIndex = (lowerCaseLetters.length - 1) - index;
    
    return lowerCaseLetters[encryptedIndex];
  }

  return letter;
};

function problem4(word) {
  const letters = word.split('');
  const encryptedLetters = letters.map((letter) => encryptLetter(letter));

  return encryptedLetters.join('');
}

module.exports = problem4;
