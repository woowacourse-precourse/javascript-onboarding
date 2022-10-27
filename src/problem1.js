const ERROR = -1;
const POBI_WIN = 1;
const CRONG_WIN = 2;
const DRAW = 0;

const isCorrectPage = ([left, right]) => {
  if (left % 2 === 0 || right % 2 === 1) return false;
  if (left < 1 || right > 400) return false;
  if (right - left !== 1) return false;
  return true;
};

const splitNumber = ([left, right]) => {
  const leftNums = (left + "").split("").map((item) => Number(item));
  const rightNums = (right + "").split("").map((item) => Number(item));
  return [leftNums, rightNums];
};

const getScore = ([left, right]) => {
  const leftSum = left.reduce((acc, cur) => acc + cur, 0);
  const leftMultiply = left.reduce((acc, cur) => acc * cur, 1);
  const rightSum = right.reduce((acc, cur) => acc + cur, 0);
  const rightMultiply = right.reduce((acc, cur) => acc * cur, 1);
  return Math.max(leftSum, leftMultiply, rightSum, rightMultiply);
};

function problem1(pobi, crong) {
  if (!isCorrectPage(pobi) || !isCorrectPage(crong)) return ERROR;

  const pobiScore = getScore(splitNumber(pobi));
  const crongScore = getScore(splitNumber(crong));

  if (pobiScore > crongScore) return POBI_WIN;
  if (pobiScore < crongScore) return CRONG_WIN;
  return DRAW;
}
module.exports = problem1;
