const MAX_PAGE = 400;

const getSplitedArray = (argument) => ('' + argument).split('');

const getSum = (numbers) =>
  numbers.reduce((result, currentNumber) => +result + +currentNumber, 0);

const getMultiple = (numbers) =>
  numbers.reduce((result, currentNumber) => +result * +currentNumber, 1);

const getMaxScore = (left, right) =>
  Math.max(
    getSum(getSplitedArray(left)),
    getMultiple(getSplitedArray(left)),
    getSum(getSplitedArray(right)),
    getMultiple(getSplitedArray(right))
  );

const isValid = (left, right) => {
  if (+left <= 0 || +right >= MAX_PAGE) return false;
  if (+left % 2 === 0 || +right % 2 === 1) return false;
  if (+left + 1 !== +right) return false;

  return true;
};

const problem1 = (pobi, crong) => {
  if (!isValid(...pobi) || !isValid(...crong)) return -1;

  const pobiScore = getMaxScore(...pobi);
  const crongScore = getMaxScore(...crong);

  return pobiScore > crongScore ? 1 : crongScore > pobiScore ? 2 : 0;
};

module.exports = problem1;
