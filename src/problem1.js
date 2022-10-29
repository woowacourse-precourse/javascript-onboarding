function problem1(pobi, crong) {
  if (breakTheRules(pobi) || breakTheRules(crong)) {
    return -1;
  }
  let [pobiLargeNum, crongLargeNum] = [getLargeNum(pobi), getLargeNum(crong)];
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
  let [leftPage, rightPage] = [
    arr[0].toString().split("").map(Number),
    arr[1].toString().split("").map(Number),
  ];

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

function breakTheRules(num) {
  if (num[0] === 1 || num[0] === 399 || num[0] + 1 !== num[1]) {
    return true;
  } else {
    return false;
  }
}

module.exports = problem1;
