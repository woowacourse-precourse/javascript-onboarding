const ARR_LENGTH = 2;

function sumAllDigitNumber(page) {
  let result = 0;
  for (let i = 0; i < page.length; i++) {
    result += +page[i];
  }
  return result;
}

function mulAllDigitNumber(page) {
  let result = +page[0];
  for (let i = 1; i < page.length; i++) {
    result *= +page[i];
  }
  return result;
}

function getBiggestValue(arr) {
  const calculatedNums = [];
  for (let i = 0; i < 2; i++) {
    const digitSum = sumAllDigitNumber(arr[i] + '');
    const digitMul = mulAllDigitNumber(arr[i] + '');
    calculatedNums.push(digitSum);
    calculatedNums.push(digitMul);
  }
  return Math.max(...calculatedNums);
}

function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  for (let i = 0; i < ARR_LENGTH; i++) {
    if (pobi[i] < 1 || pobi[i] > 400 || crong[i] < 1 || crong[i] > 400) {
      return -1;
    }
  }
  const pobiValue = getBiggestValue(pobi);
  const crongValue = getBiggestValue(crong);
  if (pobiValue > crongValue) return 1;
  if (pobiValue < crongValue) return 2;
  if (pobiValue === crongValue) return 0;
}

module.exports = problem1;
