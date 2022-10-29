function problem4(word) {
  var answer;
  return answer;
}

function makeAlphabetArray() {
  const alphabet = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 65));
  return alphabet;
}

function makeReverseAlphabetArray() {
  const reverseAlphabet = makeAlphabetArray();
  reverseAlphabet.reverse();
  return reverseAlphabet;
}

function recordCapitalAlphabet(word) {
  const wordArray = word.split("");
  const recordCapital = wordArray.map((i) => i === i.toUpperCase());
  return recordCapital;
}

function makeCapitalAlphabetArray(word) {
  const capitalWordArray = word.toUpperCase().split("");
  return capitalWordArray;
}

function checkIndexOfAlphabet(wordArr, forwardArr) {
  const indexOfWord = [];
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < forwardArr.length; j++) {
      if (!(wordArr[i].charCodeAt(0) > 64 && wordArr[i].charCodeAt(0) < 91)) {
        indexOfWord.push(wordArr[i]);
        break;
      }
      if (wordArr[i] === forwardArr[j]) {
        indexOfWord.push(forwardArr.indexOf(forwardArr[j]));
        break;
      }
    }
  }
  return indexOfWord;
}

function convertReverseAlphabet(indexArr, reverseArr) {
  const result = [];
  for (let i = 0; i < indexArr.length; i++) {
    if (isNaN(indexArr[i]) || indexArr[i] === " ") result.push(indexArr[i]);
    else result.push(reverseArr[indexArr[i]]);
  }
  return result;
}

module.exports = problem4;
