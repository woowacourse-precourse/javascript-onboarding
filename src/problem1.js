function sumNumOfDigit(array) {
  return array.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);
}

function mulNumOfDigit(array) {
  return array.reduce((acc, currentValue) => {
    return acc * currentValue;
  }, 1);
}

function getBigNumber(number) {
  const strNumber = String(number);
  const newArray = strNumber.split("").map((v) => Number(v));
  const sumResult = sumNumOfDigit(newArray);
  const mulResult = mulNumOfDigit(newArray);
  return Math.max(sumResult, mulResult);
}

function getFinalBigNumber(numberArray) {
  if (!errorHandling(numberArray)) return false;
  const leftBigNumber = getBigNumber(numberArray[0]);
  const rightBigNumber = getBigNumber(numberArray[1]);
  return Math.max(leftBigNumber, rightBigNumber);
}

function getResult(pobiNumber, crongNumber) {
  if (pobiNumber > crongNumber) return 1;
  if (pobiNumber < crongNumber) return 2;
  if (pobiNumber === crongNumber) return 0;
}

function errorHandling(numberArray) {
  const leftNumber = numberArray[0];
  const rightNumber = numberArray[1];
  if (numberArray.length !== 2) return false;
  if (leftNumber % 2 === 0) return false;
  if (rightNumber - leftNumber !== 1) return false;
  if (leftNumber < 1 || leftNumber > 400) return false;
  if (rightNumber < 1 || rightNumber > 400) return false;
  if (leftNumber === 1) return false;
  if (rightNumber === 400) return false;
  if (!Number.isInteger(leftNumber) || !Number.isInteger(rightNumber))
    return false;
  return true;
}

function problem1(pobi, crong) {
  const pobiNumber = getFinalBigNumber(pobi);
  const crongNumber = getFinalBigNumber(crong);
  if (pobiNumber && crongNumber) return getResult(pobiNumber, crongNumber);
  return -1;
}

module.exports = problem1;
