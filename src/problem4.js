function problem4(word) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const alphabetReverse = [...alphabet].reverse();

  const lowerAlpha = Array.from(Array(26)).map((e, i) => i + 97);
  const lowerAlphabet = lowerAlpha.map((x) => String.fromCharCode(x));
  const lowerAlphabetReverse = [...lowerAlphabet].reverse();

  let wordSeparation = word.split('');    
  let newWordArr = [];
  let index = 0;
  



}

module.exports = problem4;
