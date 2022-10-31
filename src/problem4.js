function problem4(word) {
  var answer;
  const capitalWords = makeCapitalAlphabet(word);
  const forwardAlphabets = makeForwardAlphabet();
  const reverseAlphabets = makeReverseAlphabet();
  const recordCapitals = recordCapitalAlphabet(word);
  const wordIndexs = checkWordIndex(capitalWords, forwardAlphabets);
  const greenFrogWords = convertGreenFrogWord(wordIndexs, reverseAlphabets);
  answer = checkCapitalAlphabet(greenFrogWords, recordCapitals).join("");
  return answer;
}

function makeForwardAlphabet() {
  const alphabets = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 65));
  return alphabets;
}

function makeReverseAlphabet() {
  const reverseAlphabets = makeForwardAlphabet();
  reverseAlphabets.reverse();
  return reverseAlphabets;
}

function recordCapitalAlphabet(word) {
  const words = word.split("");
  const records = words.map((i) => i === i.toUpperCase());
  return records;
}

function makeCapitalAlphabet(word) {
  const words = word.toUpperCase().split("");
  return words;
}

function checkWordIndex(words, forwardAlphabets) {
  const results = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < forwardAlphabets.length; j++) {
      if (!(words[i].charCodeAt(0) > 64 && words[i].charCodeAt(0) < 91)) {
        results.push(words[i]);
        break;
      }
      if (words[i] === forwardAlphabets[j]) {
        results.push(forwardAlphabets.indexOf(forwardAlphabets[j]));
        break;
      }
    }
  }
  return results;
}

function convertGreenFrogWord(indexs, reverseAlphabets) {
  const result = [];
  for (let i = 0; i < indexs.length; i++) {
    if (isNaN(indexs[i]) || indexs[i] === " ") result.push(indexs[i]);
    else result.push(reverseAlphabets[indexs[i]]);
  }
  return result;
}

function checkCapitalAlphabet(greenFrogWords, records) {
  const result = [];
  for (let i = 0; i < greenFrogWords.length; i++) {
    if (records[i]) result.push(greenFrogWords[i]);
    else result.push(greenFrogWords[i].toLowerCase());
  }
  return result;
}

module.exports = problem4;
