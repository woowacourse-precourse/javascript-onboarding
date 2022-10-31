const COUNT_CONDITION = [3, 6, 9];

const getSplitedNumbersArray = (number) =>
  Array.from({ length: number }, (_, i) => ('' + (i + 1)).split(''));

const getCount = (array) =>
  array.reduce(
    (count, currentNumber) => count + COUNT_CONDITION.includes(+currentNumber),
    0
  );

const problem3 = (number) => {
  const splitedArray = getSplitedNumbersArray(number);
  return splitedArray.reduce(
    (totalCount, currentNumbers) => totalCount + getCount(currentNumbers),
    0
  );
};

module.exports = problem3;
