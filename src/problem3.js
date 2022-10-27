const RESULT = {
  exception: -1,
};

const INPUT = {
  number: 'number',
  minInput: 1,
  maxInput: 10000,
};

function problem3(number) {
  if (isWrongInput(number)) {
    return RESULT.exception;
  }
}

function isWrongInput(input) {
  if (isWrongTypeOfInput(input)) {
    return true;
  }

  if (isWrongLengthOfInput(input)) {
    return true;
  }

  if (Number.isNaN(input)) {
    return true;
  }

  return false;
}

function isWrongTypeOfInput(input) {
  return typeof input !== INPUT.number;
}

function isWrongLengthOfInput(input) {
  return input < INPUT.minInput || input > INPUT.maxInput;
}

module.exports = problem3;
