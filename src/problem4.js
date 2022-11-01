function problem4(word) {
  var answer;
  
  const alphabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reAlphabet =
  " zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";
  let alphabetArr = alphabet.split("");
  let realphabetArr = reAlphabet.split("");
  
  const wordArr = word.split("");
  let reWordArr = [];
  
  let indexArr = [];
  for (let i = 0; i < wordArr.length; i++) {
  alphabetList = alphabetArr.indexOf(wordArr[i]);
  indexArr.push(alphabetList);
  }
  
  for (let j in indexArr) {
  reWordArr.push(realphabetArr[indexArr[j]]);
  answer = reWordArr.join("");
  }
  
  return answer;
  }
  
  module.exports = problem4;