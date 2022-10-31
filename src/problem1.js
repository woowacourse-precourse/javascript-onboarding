function problem1(pobi, crong) {
  if (getGreatestNumber(pobi) > getGreatestNumber(crong)) return 1;
  if (getGreatestNumber(pobi) < getGreatestNumber(crong)) return 2;
  if (getGreatestNumber(pobi) === getGreatestNumber(crong)) return 0;
  return -1;
}

const getGreatestNumber = (pageList) => {
  if (pageList[0] + 1 !== pageList[1]) return 'error';
  return Math.max(getBiggerNumber(pageList, 0), getBiggerNumber(pageList, 1));
};

const getBiggerNumber = (pageList, index) => {
  const digitList = [...pageList[index].toString()].map((v) => Number(v));
  const plus = digitList.reduce((prev, cur) => prev + cur, 0);
  const multiply = digitList.reduce((prev, cur) => prev * cur, 1);
  return Math.max(plus, multiply);
};

module.exports = problem1;
