const RESULT = {
  exception: -1,
};

const INPUT = {
  number: 'number',
  minRange: 1,
  maxRange: 10000,
};

function problem3(number) {
  if (isWrongInput(number)) {
    return RESULT.exception;
  }

  return countClap(number);
}

function isWrongInput(input) {
  if (isWrongInputValue(input)) {
    return true;
  }

  if (isWrongTypeOfInput(typeof input)) {
    return true;
  }

  if (isWrongRangeOfInput(input)) {
    return true;
  }

  if (Number.isNaN(input)) {
    return true;
  }

  return false;
}

function isWrongInputValue(input) {
  return !input;
}

function isWrongTypeOfInput(type) {
  return type !== INPUT.number;
}

function isWrongRangeOfInput(input) {
  return input < INPUT.minRange || input > INPUT.maxRange;
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
