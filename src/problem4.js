const NORMAL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FROGDICTION = NORMAL.split('').reverse();

function problem4(word) {
  var answer;
  let afterFrogDiction ='';
  
  for (i = 0; i < word.length; i++) {
    afterFrogDiction += frogDiction(word[i]);
  }
  answer = afterFrogDiction;
  return answer;
}

function frogDiction(word) {
    if (word === ' ') return word;

    if (upperCheck(word)) {
      const convertWord = FROGDICTION[NORMAL.split('').indexOf(word)];
      return convertWord;
    }
    if (!upperCheck(word)) {
      const convertWord = FROGDICTION[NORMAL.toLowerCase().split('').indexOf(word)].toLowerCase();
      return convertWord;
    }
}

function upperCheck(letter) {
  if (letter === letter.toUpperCase()) return true;
  return false;
}

module.exports = problem4;