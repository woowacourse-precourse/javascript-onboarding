const INPUT = {
  length: 2,
  object: 'object',
  number: 'number',
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
  if (isWrongInputValue(input)) {
    return true;
  }

  if (isWrongTypeOfInput(input)) {
    return true;
  }

  if (isWrongLengthOfInput(input)) {
    return true;
  }

  if (Number.isNaN(input[0]) || Number.isNaN(input[1])) {
    return true;
  }

  if (isWrongTypeOfElement(input[0], input[1])) {
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

function isWrongInputValue(input) {
  return !input;
}

function isWrongTypeOfInput(input) {
  return typeof input !== INPUT.object;
}

function isWrongLengthOfInput(input) {
  return input.length !== INPUT.length;
}

function isWrongTypeOfElement(e1, e2) {
  return typeof e1 !== INPUT.number || typeof e2 !== INPUT.number;
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
