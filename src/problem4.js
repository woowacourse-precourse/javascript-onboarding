const INPUT = {
  minLength: 1,
  maxLength: 1000,
};

const RESULT = {
  invalidInput: -1,
};

const MAPPING = {
  upperMapper: 155,
  lowerMapper: 219,
  alphabet: /[a-zA-Z]/,
};

function problem4(word) {
  if (!checkInput(word)) {
    return RESULT.invalidInput;
  }

  return solution(word);
}

function checkInput(input) {
  if (!checkValue(input)) {
    return false;
  }

  if (!checkLength(input.length, INPUT.minLength, INPUT.maxLength)) {
    return false;
  }

  return true;
}

function checkValue(v) {
  return Boolean(v);
}

function checkLength(length, minLength, maxLength) {
  return length >= minLength && length <= maxLength;
}

function solution(word) {
  const wordArray = convertStringToArray(word);
  const frogWordArray = covertWordToFrogWord(wordArray);
  const frogWord = convertArrayToString(frogWordArray);

  return frogWord;
}

function convertStringToArray(string) {
  return Array.from(String(string));
}

function covertWordToFrogWord(wordArray) {
  return wordArray.map(translateWord);
}

function translateWord(v) {
  if (isAlphabet(v)) {
    const ascii = getAscii(v);
    const frogWord = getFrogWord(ascii);
    return frogWord;
  }
  return v;
}

function isAlphabet(v) {
  return MAPPING.alphabet.test(v);
}

function getAscii(v) {
  if (isLowerCase(v)) {
    return MAPPING.lowerMapper - v.charCodeAt(0);
  }

  return MAPPING.upperMapper - v.charCodeAt(0);
}

function isLowerCase(alpha) {
  return alpha === alpha.toLowerCase();
}

function getFrogWord(ascii) {
  return String.fromCharCode(ascii);
}

function convertArrayToString(arr) {
  return arr.join('');
}

module.exports = problem4;
