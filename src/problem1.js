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
  var answer;

  return answer;
}

module.exports = problem1;
