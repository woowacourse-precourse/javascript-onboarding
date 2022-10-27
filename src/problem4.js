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
  if (isWrongInputData(input)) {
    return true;
  }

  if (isWrongLengthOfInput(input.length)) {
    return true;
  }

  if (Number.isNaN(input)) {
    return true;
  }

  return false;
}

function isWrongInputData(input) {
  return !input;
}

function isWrongLengthOfInput(length) {
  return length < INPUT.minLength || length > INPUT.maxLength;
}

function translateWord(word) {
  return wordToArray(word).map(wordToFrogWord).join('');
}

function wordToArray(word) {
  return Array.from(String(word));
}

function wordToFrogWord(v) {
  if (isAlphabet(v)) {
    const ascci = getAscciFromChar(v);
    const frogChar = getCharFromAscci(ascci);
    return frogChar;
  }
  return v;
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
