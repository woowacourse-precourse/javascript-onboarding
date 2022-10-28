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
  return type !== INPUT.number;
}

function isWrongRangeOfInput(input) {
  return input < INPUT.minRange || input > INPUT.maxRange;
}

function countClap(number) {
  let clapNum = 0;

  for (let i = 3; i <= number; i++) {
    const strArr = getStringArrayFromNumber(i);
    clapNum += count369(strArr);
  }
  return clapNum;
}

function getStringArrayFromNumber(number) {
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
