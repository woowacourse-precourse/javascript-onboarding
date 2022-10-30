function exceptionCheck(array) {
  if (array[0] % 2 == 0)
    throw
  if (array[1] % 2 == 1)
    throw
  if (array[0] + 1 != array[1])
    throw
  if (array[0] == 1 || array[0] == 399)
    throw
}

function getMultiplyOrSum(num) {

}

function getBiggestNum(array) {

}

function compareTwoNum(first, second) {
  if (first > second)
    return (1);
  else if (first < second)
    return (2);
  else
    return (0);
}

function problem1(pobi, crong) {
  try {
    exceptionCheck(pobi);
    exceptionCheck(crong);
  } catch {
    return (-1);
  }

  let pobiNum = getBiggestNum(pobi);
  let crongNum = getBiggestNum(crong);
  let answer = compareTwoNum(pobiNum, crongNum);
  return answer;
}

// module.exports = problem1;
