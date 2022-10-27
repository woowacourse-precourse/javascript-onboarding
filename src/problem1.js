function problem1(pobi, crong) {}

const getBiggerNumber = (pageList, index) => {
  const digitList = [...pageList[index].toString()].map((v) => Number(v));
  const plus = digitList.reduce((prev, cur) => prev + cur, 0);
  const multiply = digitList.reduce((prev, cur) => prev * cur, 1);
  return Math.max(plus, multiply);
};

module.exports = problem1;
