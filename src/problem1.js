const INPUT = {
  length: 2,
  numType: 'number',
  minPage: 3,
  maxPage: 398,
};

const REDUCING = {
  additionInit: 0,
  multiplicationInit: 1,
};

const RESULT = {
  invalidInput: -1,
  draw: 0,
  pobiWin: 1,
  crongWin: 2,
};

function problem1(pobi, crong) {
  if (!isValidInput(pobi) || !isValidInput(crong)) {
    return RESULT.invalidInput;
  }

  return solution(pobi, crong);
}

function isValidInput(input) {
  if (!checkInput(input)) {
    return false;
  }

  if (!checkElement(input)) {
    return false;
  }

  return true;
}

function checkInput(input) {
  if (!checkValue(input)) {
    return false;
  }

  if (!checkArray(input)) {
    return false;
  }

  if (!checkLength(input.length, INPUT.length)) {
    return false;
  }

  return true;
}

function checkValue(v) {
  return Boolean(v);
}

function checkArray(arr) {
  return Array.isArray(arr);
}

function checkLength(length, checker) {
  return length === checker;
}

function checkElement(input) {
  if (!checkValueOfElement(input)) {
    return false;
  }

  if (!checkTypeOfElement(input)) {
    return false;
  }

  if (!checkFormOfElement({ e1: input[0], e2: input[1] })) {
    return false;
  }

  if (!checkRangeOfElement({ e1: input[0], e2: input[1] })) {
    return false;
  }

  return true;
}

function checkValueOfElement(input) {
  return input.every(v => checkValue(v));
}

function checkTypeOfElement(input) {
  return input.every(v => checkType(typeof v, INPUT.numType));
}

function checkType(type, checker) {
  return type === checker;
}

function checkFormOfElement({ e1, e2 }) {
  return isOdd(e1) && isEven(e2) && e1 === e2 - 1;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function checkRangeOfElement({ e1, e2 }) {
  return e1 >= INPUT.minPage && e2 <= INPUT.maxPage;
}

function solution(pobi, crong) {
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  return compareScore(pobiScore, crongScore);
}

function getScore(player) {
  const numArr = splitNum(player);
  const additionScoreArr = getAdditionScoreArr(numArr);
  const multipleScoreArr = getMultipleScoreArr(numArr);

  return pickHighestScore(additionScoreArr, multipleScoreArr);
}

function splitNum(arr) {
  return arr.map(v => getNumberArrayFromNumber(v));
}

function getNumberArrayFromNumber(number) {
  return Array.from(String(number), Number);
}

function getAdditionScoreArr(numArr) {
  return numArr.map(gradeScoreByAdding);
}

function getMultipleScoreArr(numArr) {
  return numArr.map(gradeScoreByMultiplying);
}

function gradeScoreByAdding(v) {
  return v.reduce(addScore, REDUCING.additionInit);
}

function gradeScoreByMultiplying(v) {
  return v.reduce(multiplyScore, REDUCING.multiplicationInit);
}

function addScore(acc, cur) {
  return (acc += cur);
}

function multiplyScore(acc, cur) {
  return (acc *= cur);
}

function pickHighestScore(additionScoreArr, multipleScoreArr) {
  return Math.max(...additionScoreArr, ...multipleScoreArr);
}

function compareScore(pobiScore, crongScore) {
  if (pobiScore > crongScore) {
    return RESULT.pobiWin;
  }

  if (pobiScore < crongScore) {
    return RESULT.crongWin;
  }

  return RESULT.draw;
}

module.exports = problem1;
