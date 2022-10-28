const INPUT = {
  numberType: 'number',
  minRange: 1,
  maxRange: 1000000,
};

const RESULT = {
  exception: -1,
};

function problem5(money) {
  if (isWrongInput(money)) {
    return RESULT.exception;
  }
}

function isWrongInput(input) {
  if (isWrongValueOfInput(input)) {
    return true;
  }

  if (isWrongTypeOfInput(typeof input)) {
    return true;
  }

  if (isWrongRangeOfInput(input)) {
    return true;
  }

  return false;
}

function isWrongValueOfInput(v) {
  return !v;
}

function isWrongTypeOfInput(type) {
  return type !== INPUT.numberType;
}

function isWrongRangeOfInput(range) {
  return range < INPUT.minRange || range > INPUT.maxRange;
}

module.exports = problem5;
