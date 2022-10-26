function problem1(pobi, crong) {
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  const scoresToCompare = [pobiScore, crongScore];
  const pobiPageError = isPageError(pobi);
  const crongPageError = isPageError(crong);
  const result = getResult(scoresToCompare, error);

  return result;
}

function calculatePageNumber(page) {
  const hundredNumber = Math.floor(page / 100);
  const tenNumber = Math.floor((page / 10) % 10);
  const oneNumber = Math.floor((page % 100) % 10);

  if (hundredNumber === 0) {
    if (tenNumber === 0) {
      return { first: oneNumber, second: oneNumber };
    }
    return { first: tenNumber + oneNumber, second: tenNumber * oneNumber };
  }

  return {
    first: hundredNumber + tenNumber + oneNumber,
    second: hundredNumber * tenNumber * oneNumber,
  };
}

function compareNumber(values) {
  if (values.first >= values.second) {
    return values.first;
  }

  return values.second;
}

function getScore(person) {
  const leftValues = calculatePageNumber(person[0]);
  const leftScore = compareNumber(leftValues);
  const rightValues = calculatePageNumber(person[1]);
  const rightScore = compareNumber(rightValues);

  return compareNumber({ first: leftScore, second: rightScore });
}

function getResult([pobi, crong], error) {
  if (pobi > crong) {
    return 1;
  }
  if (pobi === crong) {
    return 0;
  }
  if (pobi < crong) {
    return 2;
  }
}

function isPageError(person) {
  const FIRST_PAGE = 1;
  const LAST_PAGE = 400;

  if (person[0] <= 1 || person[1] >= 400) {
    return "error";
  }

  return 0;
}

module.exports = problem1;
