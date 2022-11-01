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
  for (const element of wordSeparation) {
    index = lowerAlphabet.indexOf(element);
    if (index !== -1 ){
        newWordArr.push(lowerAlphabetReverse[lowerAlphabet.indexOf(element)]);
    }
    if (index == -1){
      newWordArr.push(" "); 
    }    
  }
  for (const element of wordSeparation){
    index = alphabet.indexOf(element);
    if (index !== -1 ){
      newWordArr[wordSeparation.indexOf(element)] = alphabetReverse[index];
    }
  }
  const newWord = newWordArr.join('');
  return newWord;
}

module.exports = problem4;

console.log(problem4("My Name Is B"));
console.log(problem4("I love you"));