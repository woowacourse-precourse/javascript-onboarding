function problem1(pobi, crong) {
  const answer = 0;
  return answer;
}

const getNumberArray = (number) => {
  return String(number)
    .split("")
    .map((number) => Number(number));
};

const getSumNumber = (pageNumber) => {
  return getNumberArray(pageNumber).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const getMulNumber = (pageNumber) => {
  return getNumberArray(pageNumber).reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

module.exports = problem1;
