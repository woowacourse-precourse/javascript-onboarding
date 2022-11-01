function problem1(pobi, crong) {
  let answer;

  if (errorCheck(pobi)) return -1;
  if (errorCheck(crong)) return -1;

  const pobiMax = getMaxNumberByArray(pobi);
  const crongMax = getMaxNumberByArray(crong);

  if (pobiMax > crongMax) answer = 1;
  if (pobiMax < crongMax) answer = 2;
  if (pobiMax === crongMax) answer = 0;

  return answer;
}

function errorCheck(numbers) {
  if (numbers[1] - numbers[0] !== 1) return 1;
  if (numbers[1] <= 0) return 1;
  if (numbers[0] >= 400) return 1;

  return 0;
}

function getMaxNumberByArray(numbers) {
  let retunMax = 0;

  numbers.forEach((number) => {
    const maxNumber = getMaxNumberByOneNumber(number);
    if (retunMax < maxNumber) retunMax = maxNumber;
  });

  return retunMax;
}

function getMaxNumberByOneNumber(number) {
  let numberStr = "" + number;
  let numberWithAdding = 0;
  let numberWithMultiplying = 1;

  [...numberStr].forEach((oneNumberStr) => {
    numberWithAdding += +oneNumberStr;
    numberWithMultiplying *= +oneNumberStr;
  });

  return Math.max(numberWithAdding, numberWithMultiplying);
}

module.exports = problem1;
