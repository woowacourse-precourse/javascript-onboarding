function problem1(pobi, crong) {
  if (isValid(pobi) || isValid(crong)) return GAME_RESULT.EXCEPTION;
  if (getMaxNumber(pobi) > getMaxNumber(crong)) return GAME_RESULT.POBI_WINNER;
  if (getMaxNumber(pobi) < getMaxNumber(crong)) return GAME_RESULT.CRONG_WINNER;
  if (getMaxNumber(pobi) === getMaxNumber(crong)) return GAME_RESULT.DRAW;
}

const GAME_RESULT = Object.freeze({
  CRONG_WINNER: 2,
  POBI_WINNER: 1,
  DRAW: 0,
  EXCEPTION: -1,
});

const isValid = (pageArr) => {
  if(pageArr[0] === 1 || pageArr[1] === 400) return true;
  return (pageArr[1] - pageArr[0] !== 1);
};

const getMaxSum = (pageArr) => {
  return Math.max(
    ...pageArr.map((pageNum) =>
      String(pageNum)
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0)
    )
  );
};

const getMaxMultiplication = (pageArr) => {
  return Math.max(
    ...pageArr.map((pageNum) =>
      String(pageNum)
        .split("")
        .reduce((acc, curr) => acc * Number(curr), 1)
    )
  );
};

const getMaxNumber = (pageArr) => {
  return Math.max(getMaxSum(pageArr), getMaxMultiplication(pageArr));
};

module.exports = problem1;
