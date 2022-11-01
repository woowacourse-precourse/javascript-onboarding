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

function makeCapitalAlphabet(word) {
  const words = word.toUpperCase().split("");
  return words;
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

function checkWordIndex(words, forwardAlphabets) {
  const results = [];
  words.forEach((_, i) => {
    indexing({ words, forwardAlphabets, i, results });
  });
  return results;
}

function indexing({ words, forwardAlphabets, i, results }) {
  for (let j = 0; j < forwardAlphabets.length; j++) {
    if (words[i].charCodeAt(0) < 65 || words[i].charCodeAt(0) > 90) {
      results.push(words[i]);
      break;
    }
    if (words[i] === forwardAlphabets[j]) {
      results.push(forwardAlphabets.indexOf(forwardAlphabets[j]));
      break;
    }
  }
}

function convertGreenFrogWord(indexs, reverseAlphabets) {
  const result = [];
  indexs.forEach((value) => {
    if (isNaN(value) || value === " ") result.push(value);
    else result.push(reverseAlphabets[value]);
  });
  return result;
}

function checkCapitalAlphabet(greenFrogWords, records) {
  const result = [];
  greenFrogWords.forEach((value, index) => {
    if (records[index]) result.push(value);
    else result.push(value.toLowerCase());
  });
  return result;
}

module.exports = problem4;
