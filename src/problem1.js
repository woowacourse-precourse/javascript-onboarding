function getHigherNumber(nums) {
  const heigherNums = nums.map((num) => {
    const sum = String(num)
      .split("")
      .reduce((prev, next) => +prev + +next, 0);
    const mul = String(num)
      .split("")
      .reduce((prev, next) => +prev * +next, 1);
    return Math.max(sum, mul);
  });
  return Math.max(...heigherNums);
}

function isError(page1, page2) {
  return page1 + 1 !== page2;
}

function problem1(pobi, crong) {
  if (isError(pobi[0], pobi[1]) || isError(crong[0], crong[1])) {
    return -1;
  }

  const pobiNum = getHigherNumber(pobi);
  const crongNum = getHigherNumber(crong);

  if (pobiNum > crongNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 2;
  } else if (pobiNum === crongNum) {
    return 0;
  }
}

module.exports = problem1;
