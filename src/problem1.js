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

  const [crongLeft, crongRight] = crong.map(String);
  if (exceptions(crongLeft, crongRight)) {
    return -1;
  }
}

module.exports = problem1;
