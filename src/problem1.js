function handleExceptions(pobi, crong) {
  if (Math.abs(pobi[0] - pobi[1]) !== 1 || Math.abs(crong[0] - crong[1]) !== 1)
    return true;

  if ([...pobi, ...crong].some((page) => page <= 1 || page >= 400)) return true;

  return false;
}

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
  const exception = handleExceptions(pobi, crong);

  if (exception) return -1;

  const pobiScore = getMaxBetweenAddAndMul(pobi);
  const crongScore = getMaxBetweenAddAndMul(crong);

  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return 0;
}

module.exports = problem1;
