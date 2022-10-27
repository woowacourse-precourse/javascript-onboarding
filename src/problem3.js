const RESULT = {
  exception: -1,
};

const INPUT = {
  number: 'number',
  minInput: 1,
  maxInput: 10000,
};

function isWrongInput(input) {
  if (typeof input !== INPUT.number) {
    return true;
  }

  if (input < INPUT.minInput || input > INPUT.maxInput) {
    return true;
  }

  if (Number.isNaN(input)) {
    return true;
  }

  return false;
}

function problem3(number) {
  if (isWrongInput(number)) {
    console.log('test');
    return RESULT.exception;
  }
}

module.exports = problem3(NaN);
