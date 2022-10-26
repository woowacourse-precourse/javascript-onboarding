function sum(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}

function multiply(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc * cur, 1);
}

function compareMaxBySumAndMultiply(person) {
  const [left, right] = person;
  return Math.max(sum(left), sum(right), multiply(left), multiply(right));
}

function compareResult(pobiMax, crongMax) {
  if (pobiMax > crongMax) {
    return 1;
  }

  if (crongMax > pobiMax) {
    return 2;
  }

  if (crongMax === pobiMax) {
    return 0;
  }
}

function validatePage(pages) {
  const [left, right] = pages;
  if (left + 1 === right) {
    return true;
  }
  return false;
}

function problem1(pobi, crong) {
  var answer;
  if (validatePage(pobi) && validatePage(crong)) {
    const pobiMax = compareMaxBySumAndMultiply(pobi);
    const crongMax = compareMaxBySumAndMultiply(crong);
    answer = compareResult(pobiMax, crongMax);
    return answer;
  }

  return -1;
}

module.exports = problem1;
