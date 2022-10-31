const RESULT = {
  invalidInput: -1,
};

const INPUT = {
  numType: 'number',
  minRange: 1,
  maxRange: 10000,
};

function problem3(number) {
  if (!checkInput(number)) {
    return RESULT.invalidInput;
  }

  return solution(number);
}

function checkInput(input) {
  if (!checkValue(input)) {
    return false;
  }

  if (!checkType(typeof input, INPUT.numType)) {
    return false;
  }

  if (!checkRange(input, INPUT.minRange, INPUT.maxRange)) {
    return false;
  }

  return true;
}

function checkValue(v) {
  return Boolean(v);
}

function checkType(type, checker) {
  return type === checker;
}

function checkRange(input, minRange, maxRange) {
  return input >= minRange && input <= maxRange;
}

function solution(number) {
  const clap = { num: 0 };

  for (let i = 3; i <= number; i++) {
    const strArr = convertNumberToStrArr(i);
    clap.num += count369(strArr);
  }
  return clap.num;
}

function convertNumberToStrArr(number) {
  return Array.from(String(number));
}

function count369(strArr) {
  return strArr.filter(isMultipleOfThree).length;
}

function isMultipleOfThree(v) {
  const num = Number(v);

  return num && num % 3 === 0;
}

module.exports = problem3;
