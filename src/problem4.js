function charToAscii(char) {
  return char.charCodeAt();
}

function problem4(word) {
  let reversedWord = '';
  for (let i = 0; i < word.length; i++) {
    const ascii = charToAscii(word[i]);
  }
  return reversedWord;
}

module.exports = problem4;
