function problem1(pobi, crong) {
  let pobiLargeNum = getLargeNum(pobi);
  let crongLargeNum = getLargeNum(crong);
  let result = getWinner(pobiLargeNum, crongLargeNum);
  return result;
}

function getLargeNum(arr) {
  const sumCallback = (accumulator, current) => {
    return accumulator + current;
  };

  const multiCallback = (accumulator, current) => {
    return accumulator * current;
  };

  let leftPage = arr[0].toString().split("").map(Number);
  let rightPage = arr[1].toString().split("").map(Number);
  let max = Math.max(
    leftPage.reduce(sumCallback),
    leftPage.reduce(multiCallback),
    rightPage.reduce(sumCallback),
    rightPage.reduce(multiCallback)
  );
  return max;
}

function getWinner(pobiNum, crongNum) {
  if (crongNum < pobiNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 2;
  } else if (pobiNum === crongNum) {
    return 0;
  }
}

module.exports = problem1;
