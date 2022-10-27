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

function isWrongInput(arr) {
  if (isWrongTypeOfInput(arr)) {
    return true;
  }

  if (isWrongLengthOfInput(arr)) {
    return true;
  }

  if (isWrongTypeOfElement(arr[0], arr[1])) {
    return true;
  }

  if (isWrongFormatOfElement(arr[0], arr[1])) {
    return true;
  }

  if (isWrongRangeOfElement(arr[0], arr[1])) {
    return true;
  }

  return false;
}

function isWrongTypeOfInput(arr) {
  return typeof arr !== INPUT.object;
}

function isWrongLengthOfInput(arr) {
  return arr.length !== INPUT.length;
}

function isWrongTypeOfElement(num1, num2) {
  return typeof num1 !== INPUT.number || typeof num2 !== INPUT.number;
}

function isWrongFormatOfElement(num1, num2) {
  return isEven(num1) || isOdd(num2) || num1 !== num2 - 1;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function isWrongRangeOfElement(num1, num2) {
  return num1 < INPUT.minPage || num2 > INPUT.maxPage;
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
