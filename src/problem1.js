const POBI_WIN = 1;
const CRONG_WIN = 2;
const DRAW = 0;
const ERROR = -1;

const splitNumberToArray = (number) => {
  return String(number)
    .split("")
    .map((char) => Number(char));
};

const calcSum = (numberArray) => {
  return numberArray.reduce((acc, cur) => acc + cur);
};

const calcMul = (numberArray) => {
  return numberArray.reduce((acc, cur) => acc * cur);
};

const getScore = ([left, right]) => {
  return Math.max(
    calcSum(splitNumberToArray(left)),
    calcSum(splitNumberToArray(right)),
    calcMul(splitNumberToArray(left)),
    calcMul(splitNumberToArray(right))
  );
};

const isValid = ([left, right]) => {
  if (right - left !== 1) {
    return false;
  }

  if (left % 2 === 0) {
    return false;
  }

  if (left < 1 || left > 399 || right < 2 || right > 400) {
    return false;
  }

  return true;
};

function problem1(pobi, crong) {
  // var answer;

  if (!isValid(pobi) || !isValid(crong)) return ERROR;

  const scorePobi = getScore(pobi);
  const scoreCrong = getScore(crong);

  if (scorePobi === scoreCrong) {
    return DRAW;
  } else if (scorePobi > scoreCrong) {
    return POBI_WIN;
  } else if (scorePobi < scoreCrong) {
    return CRONG_WIN;
  } else {
    return ERROR;
  }
}

module.exports = problem1;
