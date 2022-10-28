const ARR_LENGTH = 2;

const getSumAllDigit = (pageNum) => {
  return [...pageNum.toString()].reduce(
    (acc, curDigit) => acc + parseInt(curDigit),
    0
  );
};

const getMulAllDigit = (pageNum) => {
  return [...pageNum.toString()].reduce(
    (acc, curDigit) => acc * parseInt(curDigit)
  );
};

const getMaxValue = (pages) => {
  const calculateNums = [];
  for (let i = 0; i < 2; i++) {
    const digitSum = getSumAllDigit(pages[i]);
    const digitMul = getMulAllDigit(pages[i]);
    calculateNums.push(digitSum);
    calculateNums.push(digitMul);
  }

  return Math.max(...calculateNums);
};

function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  for (let i = 0; i < ARR_LENGTH; i++) {
    if (pobi[i] < 1 || pobi[i] > 400 || crong[i] < 1 || crong[i] > 400) {
      return -1;
    }
  }
  const pobiValue = getMaxValue(pobi);
  const crongValue = getMaxValue(crong);
  if (pobiValue > crongValue) return 1;
  if (pobiValue < crongValue) return 2;
  if (pobiValue === crongValue) return 0;
}

module.exports = problem1;
