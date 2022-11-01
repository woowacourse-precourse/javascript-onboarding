const gameState = {
  pobiWin: 1,
  crongWin: 2,
  draw: 0,
  exception: -1,
};

const isNextPage = (left, right) => {
  return right - left === 1;
};
const isLeftOdd = (num) => {
  return num % 2 === 1;
};

const isRightEven = (num) => {
  return num % 2 === 0;
};

const isInvalidPageRange = (left, right) => {
  return left < 2 || right < 2 || left > 399 || right > 399;
};

const isValidPage = (page) => {
  const [left, right] = page;

  if (!isNextPage(left, right)) return false;
  if (!isLeftOdd(left)) return false;
  if (!isRightEven(right)) return false;
  if (isInvalidPageRange(left, right)) return false;

  return true;
};

const digitsSum = (digits) => {
  return digits.reduce((num_1, num_2) => Number(num_1) + Number(num_2));
};

const digitsMul = (digits) => {
  return digits.reduce((num_1, num_2) => Number(num_1) * Number(num_2));
};

const getMaxScore = (page) => {
  const [left, right] = page;

  const leftDigit = left.toString().split("");
  const rightDigit = right.toString().split("");

  const maxScore = Math.max(digitsSum(leftDigit), digitsMul(rightDigit));

  return maxScore;
};

const getWinner = (pobi, crong) => {
  const winner =
    getMaxScore(pobi) > getMaxScore(crong)
      ? gameState.pobiWin
      : getMaxScore(pobi) === getMaxScore(crong)
      ? gameState.draw
      : gameState.crongWin;

  return winner;
};

function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) return gameState.exception;

  return getWinner(pobi, crong);
}

module.exports = problem1;
