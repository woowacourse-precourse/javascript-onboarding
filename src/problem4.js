const getReverseAlphabet = (char) => {
  const charASCII = char.charCodeAt();
  if (charASCII >= 97 && charASCII <= 122)
      return String.fromCharCode(97 + 122 - charASCII);
  if (charASCII >= 65 && charASCII <= 90)
      return String.fromCharCode(65 + 90 - charASCII);
  return char;
}

function problem4(word) {
  const splitWord = word.split('');
  const reverseSplitWord = splitWord.map(c => getReverseAlphabet(c));
  return reverseSplitWord.join();    
}

module.exports = problem4;