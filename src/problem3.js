const getSplitedArrayOfNumber = (number) =>
  Array.from({ length: number }, (_, i) => ('' + (i + 1)).split(''));

const getClapCount = (array) =>
  array.filter((number) => number.match(/[369]/)).length;

const problem3 = (number) =>
  getSplitedArrayOfNumber(number).reduce(
    (totalCount, currentNumbers) => totalCount + getClapCount(currentNumbers),
    0
  );

module.exports = problem3;
