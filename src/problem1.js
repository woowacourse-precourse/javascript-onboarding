const VALIDITT = {
  length: 2,
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

function getBigAddtionScore(numArr) {
  const arr = numArr.map((v) => {
    return v.reduce((acc, cur) => {
      return (acc += cur);
    }, REDUCING.additionInit);
  });

  return Math.max(...arr);
}

function getBigMultiplicationScore(numArr) {
  const arr = numArr.map((v) => {
    return v.reduce((acc, cur) => {
      return (acc *= cur ? cur : 1);
    }, REDUCING.multiplicationInit);
  });

  return Math.max(...arr);
}

function splitNum(arr) {
  return arr.map((v) => Array.from(String(v), Number));
}

function getBigScore(arr) {
  const addtionScore = getBigAddtionScore(splitNum(arr));
  const multiplicationScore = getBigMultiplicationScore(splitNum(arr));

  return Math.max(addtionScore, multiplicationScore);
}

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

function isValidArgument(arr) {
  if (arr.length !== VALIDITT.length) {
    return false;
  }

  if (typeof arr[0] !== VALIDITT.number || typeof arr[1] !== VALIDITT.number) {
    return false;
  }

  if (isEven(arr[0]) || !isEven(arr[1])) {
    return false;
  }

  if (arr[0] !== arr[1] - 1) {
    return false;
  }

  if (arr[0] < VALIDITT.minPage || arr[1] > VALIDITT.maxPage) {
    return false;
  }

  return true;
}

function problem1(pobi, crong) {
  if (!isValidArgument(pobi) || !isValidArgument(crong)) {
    return RESULT.exception;
  }
  return compareScore(getBigScore(pobi), getBigScore(crong));
}

module.exports = problem1;
