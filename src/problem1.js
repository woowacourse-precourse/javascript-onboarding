function getResultOfAdd(page) {
  return page
    .toString()
    .split("")
    .reduce((prev, cur) => (prev += parseInt(cur)), 0);
}

function getResultOfMul(page) {
  return page
    .toString()
    .split("")
    .reduce((prev, cur) => (prev *= parseInt(cur)), 1);
}

function getMaxBetweenAddAndMul(pages) {
  const resultOfAdd = pages.map(getResultOfAdd);
  const resultOfMul = pages.map(getResultOfMul);

  return Math.max(...resultOfAdd, ...resultOfMul);
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
