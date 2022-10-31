function multiplication(str) {
  return str
    .split("")
    .map(Number)
    .reduce((pre, cur) => pre * cur);
}

function plus(str) {
  return str
    .split("")
    .map(Number)
    .reduce((pre, cur) => pre + cur);
}

function calculation(left, right) {
  const leftPlusValue = plus(left);
  const leftMultiplicationValue = multiplication(left);

  const maxLeft = Math.max(leftPlusValue, leftMultiplicationValue);

  const rightPlusValue = plus(right);
  const rightMultiplicationValue = multiplication(right);

  const maxRight = Math.max(rightPlusValue, rightMultiplicationValue);

  return Math.max(maxLeft, maxRight);
}

function oddOrEven(leftNum, rightNum) {
  if (leftNum % 2 !== 1 || rightNum % 2 !== 0) {
    return true;
  }
}

function exceptions(left, right) {
  const leftNum = +left;
  const rightNum = +right;

  if (rightNum - leftNum !== 1) {
    return true;
  }
  if (leftNum <= 1 || leftNum >= 400) {
    return true;
  }
  if (oddOrEven(leftNum, rightNum)) {
    return true;
  }
  return false;
}

function problem1(pobi, crong) {
  const [pobiLeft, pobiRight] = pobi.map(String);
  if (exceptions(pobiLeft, pobiRight)) {
    return -1;
  }
  const maxPobiValue = calculation(pobiLeft, pobiRight);

  const [crongLeft, crongRight] = crong.map(String);
  if (exceptions(crongLeft, crongRight)) {
    return -1;
  }
  const maxCrongValue = calculation(crongLeft, crongRight);

  if (maxPobiValue > maxCrongValue) {
    return 1;
  } else if (maxPobiValue < maxCrongValue) {
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;
