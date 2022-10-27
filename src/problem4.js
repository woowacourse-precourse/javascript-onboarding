function problem4(word) {
  let reverseWord = word.split('').map(c => getReverseAlphabet(c)).join('');
  return reverseWord;    
}

module.exports = problem4;