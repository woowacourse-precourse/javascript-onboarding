function exceptionCheck(array) {
  if ((array[0] % 2) == 0)
    throw -1;
  if ((array[1] % 2) == 1)
    throw -1;
  if (array[0] + 1 != array[1])
    throw -1;
  if (array[0] == 1 || array[0] == 399)
    throw -1;
}

function getMultiplyNum(num) {
  let multiplyNum = 1;

  while (num > 0) {
    multiplyNum *= Math.floor(num % 10);
    num = Math.floor(num / 10);
  }
  return multiplyNum;
}

function getSumNum(num) {
  let sumNum = 0;

  while (num > 0) {
    sumNum += Math.floor(num % 10);
    num = Math.floor(num / 10);
  }
  return sumNum;
}

function getMultiplyOrSum(num) {
  let biggerNum = Math.max(getMultiplyNum(num), getSumNum(num));
  return biggerNum;
}

function getBiggestNum(array) {
  let biggerNum = Math.max(getMultiplyOrSum(array[0]), getMultiplyOrSum(array[1]));
  return biggerNum;
}

function compareTwoNum(first, second) {
  if (first > second)
    return 1;
  if (first < second)
    return 2;
  if (first == second)
    return 0;
}

function problem1(pobi, crong) {
  try {
    exceptionCheck(pobi);
    exceptionCheck(crong);
  } catch {
    return -1;
  }

  const pobiNum = getBiggestNum(pobi);
  const crongNum = getBiggestNum(crong);
  let answer = compareTwoNum(pobiNum, crongNum);
  return answer;
}

module.exports = problem1;
