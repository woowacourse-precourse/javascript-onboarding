const INPUT = {
  minLength: 1,
  maxLength: 1000,
};

const RESULT = {
  exception: -1,
};

function problem4(word) {
  if (isWrongInput(word)) {
    return RESULT.exception;
  }
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

module.exports = problem4;
