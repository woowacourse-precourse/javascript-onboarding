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

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
