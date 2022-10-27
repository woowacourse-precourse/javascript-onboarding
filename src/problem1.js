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
  const GAME_STATUS = {
    draw: 0,
    pobiWin: 1,
    crongWin: 2,
    pageException: -1,
  };

  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  const { draw, pobiWin, crongWin, pageException } = GAME_STATUS;

  if (pobiLeft % 2 !== 1 || crongLeft % 2 !== 1 || pobiRight % 2 !== 0 || crongRight % 2 !== 0)
    return;
  if (pobiLeft + 1 !== pobiRight || crongLeft + 1 !== crongRight) return pageException;

  const pobiScore = findLargestNumber(pobiLeft, pobiRight);
  const crongScore = findLargestNumber(crongLeft, crongRight);

  if (pobiScore === crongScore) return draw;
  else if (pobiScore > crongScore) return pobiWin;
  else if (pobiScore < crongScore) return crongWin;
}

module.exports = problem1;
