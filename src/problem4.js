const ASCII = {
  UPPER_A: 65,
  UPPER_Z: 90,
  LOWER_A: 97,
  LOWER_Z: 122,
}

const getReverseAlphabet = (char) => {
  const charASCII = char.charCodeAt();
  if (charASCII >= ASCII.LOWER_A && charASCII <= ASCII.LOWER_Z)
      return String.fromCharCode(ASCII.LOWER_A + ASCII.LOWER_Z - charASCII);
  if (charASCII >= ASCII.UPPER_A && charASCII <= ASCII.UPPER_Z)
      return String.fromCharCode(ASCII.UPPER_A + ASCII.UPPER_Z - charASCII);
  return char;
}

function problem4(word) {
  const splitWord = word.split('');
  const reverseSplitWord = splitWord.map(c => getReverseAlphabet(c));
  return reverseSplitWord.join('');    
}

module.exports = problem4;