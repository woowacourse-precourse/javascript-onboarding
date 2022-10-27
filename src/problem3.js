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

  return countClap(number);
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

function countClap(number) {
  let clapNum = 0;

  for (let i = 3; i <= number; i++) {
    const strArr = numberToStringArray(i);
    clapNum += count369(strArr);
  }
  return clapNum;
}

function numberToStringArray(number) {
  return Array.from(String(number));
}

function count369(strArr) {
  return strArr.filter(isMultipleOfThree).length;
}

function isMultipleOfThree(v) {
  num = Number(v);

  return num && num % 3 === 0;
}

module.exports = problem3;
