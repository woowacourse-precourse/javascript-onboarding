const getReverseAlphabet = (char) => {
  const charASCII = char.charCodeAt();
  if (charASCII >= 97 && charASCII <= 122)
      return String.fromCharCode(97 + 122 - charASCII);
  if (charASCII >= 65 && charASCII <= 90)
      return String.fromCharCode(65 + 90 - charASCII);
  return char;
}

function problem4(word) {
  let reverseWord = word.split('').map(c => getReverseAlphabet(c)).join('');
  return reverseWord;    
}

module.exports = problem4;