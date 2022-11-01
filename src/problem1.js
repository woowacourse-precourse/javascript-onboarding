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
  const pobiScore = getMaxBetweenAddAndMul(pobi);
  const crongScore = getMaxBetweenAddAndMul(crong);

  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return 0;
}

module.exports = problem1;
