function problem1(pobi, crong) {
  return judgeResult(pobi, crong);
}

function sumByEachDigit(pages) {
  let sumResult = 0;
  while (pages > 0) {
    sumResult += pages % 10;
    pages = parseInt(pages / 10);
  }
  return sumResult;
}

function multiplyNumbers(pages) {
  const multiplyResult = String(pages)
    .split('')
    .reduce((acc, cur) => acc * cur);
  return multiplyResult;
}

function findLargestNumber(firstNumber, secondNumber) {
  const sumFirstResult = sumByEachDigit(firstNumber);
  const sumSecondResult = sumByEachDigit(secondNumber);
  const multiplyFirstResult = multiplyNumbers(firstNumber);
  const multiplySecondResult = multiplyNumbers(secondNumber);
  return Math.max(sumFirstResult, sumSecondResult, multiplyFirstResult, multiplySecondResult);
}

function judgeResult(pobi, crong) {
  if (pobi[0] % 2 !== 1 || crong[0] % 2 !== 1 || pobi[1] % 2 !== 0 || crong[1] % 2 !== 0) return;
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return -1;

  const pobiScore = findLargestNumber(pobi[0], pobi[1]);
  const crongScore = findLargestNumber(crong[0], crong[1]);

  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
}

module.exports = problem1;
