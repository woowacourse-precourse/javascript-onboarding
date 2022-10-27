function getBigNumber(number) {
  const strNumber = String(number);
  const newArray = strNumber.split("").map((v) => Number(v));
  const sumResult = newArray.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);
  const mulResult = newArray.reduce((acc, currentValue) => {
    return acc * currentValue;
  }, 1);
  return Math.max(sumResult, mulResult);
}

function getFinalBigNumber(numberArray) {
  const leftBigNumber = getBigNumber(numberArray[0]);
  const rightBigNumber = getBigNumber(numberArray[1]);
  return Math.max(leftBigNumber, rightBigNumber);
}

function getResult(pobiNumber, crongNumber) {
  if (pobiNumber > crongNumber) return 1;
  if (pobiNumber < crongNumber) return 2;
  if (pobiNumber === crongNumber) return 0;
}

function problem1(pobi, crong) {
  const pobiNumber = getFinalBigNumber(pobi);
  const crongNumber = getFinalBigNumber(crong);
  return getResult(pobiNumber, crongNumber);
}

module.exports = problem1;
