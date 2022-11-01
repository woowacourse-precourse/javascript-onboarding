function problem4(word) {
  var answer;
  let index = 0;
  const alphabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabetArr = [...alphabet];
  const reverseAlphabet =" zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";
  let reverseAlphabetArr = [...reverseAlphabet];
  let wordArr = [...word];
  let reverseWordArr = [];
  let tempArr = [];

  for(let i = 0; i <= wordArr.length; i++) {
    index = alphabetArr.indexOf(wordArr[i]);
    tempArr.push(index);
  }
  for(let j in tempArr) {
    reverseWordArr.push(reverseAlphabetArr[tempArr[j]]);
  }
  answer = reverseWordArr.join("");


  return answer;
}

module.exports = problem4;
