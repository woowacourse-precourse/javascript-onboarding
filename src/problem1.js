const INPUT = {
  length: 2,
  objectType: 'object',
  numberType: 'number',
  minPage: 3,
  maxPage: 398,
};

const REDUCING = {
  additionInit: 0,
  multiplicationInit: 1,
};

const RESULT = {
  pobi: 1,
  crong: 2,
  exception: -1,
  draw: 0,
};

function problem1(pobi, crong) {
  if (isWrongInput(pobi) || isWrongInput(crong)) {
    return RESULT.exception;
  }

  return compareScore(getScore(pobi), getScore(crong));
}

function isWrongInput(input) {
  if (isWrongValueOfInput(input)) {
    return true;
  }

  if (isWrongTypeOfInput(typeof input)) {
    return true;
  }

  if (isWrongLengthOfInput(input.length)) {
    return true;
  }

  if (isWrongValueOfElement(input[0]) || isWrongValueOfElement(input[1])) {
    return true;
  }

  if (isWrongTypeOfElement(typeof input[0], typeof input[1])) {
    return true;
  }

  if (isWrongFormatOfElement(input[0], input[1])) {
    return true;
  }

  if (isWrongRangeOfElement(input[0], input[1])) {
    return true;
  }

  return false;
}

function isWrongValueOfInput(v) {
  return !v;
}

function isWrongTypeOfInput(type) {
  return type !== INPUT.objectType;
}

function isWrongLengthOfInput(length) {
  return length !== INPUT.length;
}

function isWrongValueOfElement(v) {
  return !v;
}

function isWrongTypeOfElement(type1, type2) {
  return type1 !== INPUT.numberType || type2 !== INPUT.numberType;
}

function isWrongFormatOfElement(e1, e2) {
  return isEven(e1) || isOdd(e2) || e1 !== e2 - 1;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function isWrongRangeOfElement(e1, e2) {
  return e1 < INPUT.minPage || e2 > INPUT.maxPage;
}

function getScore(arr) {
  const numArr = splitNum(arr);
  const addtionScoreArr = getAddtionScore(numArr);
  const multipleScoreArr = getMultipleScore(numArr);

  return Math.max(...addtionScoreArr, ...multipleScoreArr);
}

function splitNum(arr) {
  return arr.map(v => Array.from(String(v), Number));
}

function getAddtionScore(numArr) {
  const arr = numArr.map(v => {
    return v.reduce((acc, cur) => {
      return (acc += cur);
    }, REDUCING.additionInit);
  });

  return arr;
}

function getMultipleScore(numArr) {
  const arr = numArr.map(v => {
    return v.reduce((acc, cur) => {
      return (acc *= cur);
    }, REDUCING.multiplicationInit);
  });

  return arr;
}

function compareScore(pobiScore, crongScore) {
  if (pobiScore === crongScore) {
    return RESULT.draw;
  }

  const winner = Math.max(pobiScore, crongScore);
  switch (winner) {
    case pobiScore: {
      return RESULT.pobi;
    }
    case crongScore: {
      return RESULT.crong;
    }
    default: {
      return RESULT.exception;
    }
  }
}

module.exports = problem1;
