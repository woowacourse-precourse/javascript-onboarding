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

function problem1(pobi, crong) {
  const pobiNumber = getFinalBigNumber(pobi);
  const crongNumber = getFinalBigNumber(crong);
  return answer;
}

module.exports = problem1;
