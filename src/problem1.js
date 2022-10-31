function isValid(pageInfo) {
  const leftPage = pageInfo[0];
  const rightPage = pageInfo[1];
  const myRegExp = /^[0-9]+$/;
  if (leftPage <= 1 || rightPage >= 400) {
    return false;
  }
  if (leftPage % 2 === 0 || rightPage % 2 !== 0) {
    return false;
  }
  if (rightPage - leftPage !== 1) {
    return false;
  }
  if (!myRegExp.test(leftPage) || !myRegExp.test(rightPage)) {
    return false;
  }
  if (pageInfo.length !== 2) {
    return false;
  }
  return true;
}

function getSum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

function getMul(num) {
  let mul = 1;
  for (let i = 0; i < num.length; i++) {
    mul *= num[i];
  }
  return mul;
}

function getNumberToArr(number) {
  const stringNum = String(number);
  const convertToNumberTypeFn = (num) => Number(num);
  const numberArr = Array.from(stringNum, convertToNumberTypeFn);

  return numberArr;
}

function getMax(arr) {
  const leftPage = getNumberToArr(arr[0]);
  const rightPage = getNumberToArr(arr[1]);

  const leftSum = getSum(leftPage);
  const rightSum = getSum(rightPage);

  const leftMul = getMul(leftPage);
  const rightMul = getMul(rightPage);

  const leftMax = Math.max(leftSum, leftMul);
  const rightMax = Math.max(rightSum, rightMul);

  return Math.max(leftMax, rightMax);
}

function problem1(pobi, crong) {
  var answer;
  if (!isValid(pobi) || !isValid(crong)) return -1;

  const pobiMax = getMax(pobi);
  const crongMax = getMax(crong);
  return answer;
}

module.exports = problem1;
