const INPUT = {
  minLength: 1,
  maxLength: 1000,
};

const RESULT = {
  exception: -1,
};

const MAPPING = {
  upperMapper: 155,
  lowerMapper: 219,
  alphabet: /[a-zA-Z]/,
};

function problem4(word) {
  if (isWrongInput(word)) {
    return RESULT.exception;
  }

  return translateWord(word);
}

function isWrongInput(input) {
  if (isWrongValueOfInput(input)) {
    return true;
  }

  if (isWrongLengthOfInput(input.length)) {
    return true;
  }

  return false;
}

function isWrongValueOfInput(v) {
  return !v;
}

function isWrongLengthOfInput(length) {
  return length < INPUT.minLength || length > INPUT.maxLength;
}

function translateWord(word) {
  const wordArray = getArrayFromString(word);
  const frogWordArray = getFrogWordArrayFromWordArray(wordArray);

  return getStringFromArray(frogWordArray);
}

function getArrayFromString(string) {
  return Array.from(String(string));
}

function getFrogWordArrayFromWordArray(wordArray) {
  return wordArray.map(translateWithAscci);
}

function translateWithAscci(v) {
  if (isAlphabet(v)) {
    const ascci = getAscciFromChar(v);
    const frogChar = getCharFromAscci(ascci);
    return frogChar;
  }
  return v;
}

function getStringFromArray(arr) {
  return arr.join('');
}

function isAlphabet(v) {
  return MAPPING.alphabet.test(v);
}

function getAscciFromChar(v) {
  if (isLowerCase(v)) {
    return MAPPING.lowerMapper - v.charCodeAt(0);
  }

  return MAPPING.upperMapper - v.charCodeAt(0);
}

function isLowerCase(alpha) {
  return alpha === alpha.toLowerCase();
}

function getCharFromAscci(ascci) {
  return String.fromCharCode(ascci);
}

module.exports = problem4;
