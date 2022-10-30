function exceptionCheck(array) {

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
