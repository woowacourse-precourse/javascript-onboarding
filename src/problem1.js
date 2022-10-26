function problem1(pobi, crong) {
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  const scoresToCompare = [pobiScore, crongScore];
  const pobiError = isError(pobi);
  const crongError = isError(crong);
  const errors = [pobiError, crongError];
  const result = getResult(scoresToCompare, errors);

  return result;
}

function getScore(person) {
  const leftValues = calculatePageNumber(person[0]);
  const leftScore = compareNumber(leftValues);
  const rightValues = calculatePageNumber(person[1]);
  const rightScore = compareNumber(rightValues);

  return compareNumber({ first: leftScore, second: rightScore });
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

function isError(person) {
  const pageError = isPageError(person);
  const numberOfPages = countNumberOfPages(person);
  const leftPage = isLeftPageNumber(person);
  const pageOrdered = orderPageNumber(person);

  if (
    pageError === 0 &&
    numberOfPages === 0 &&
    leftPage === 0 &&
    pageOrdered === 0
  ) {
    return 0;
  }

  return "error";
}

function isPageError(person) {
  const FIRST_PAGE = 1;
  const LAST_PAGE = 400;

  if (person[0] <= FIRST_PAGE || person[1] >= LAST_PAGE) {
    return "error";
  }

  return 0;
}

function countNumberOfPages(person) {
  if (person.length !== 2) {
    return "error";
  }

  return 0;
}

function isLeftPageNumber(person) {
  if (person[0] % 2 == 0) {
    return "error";
  }

  return 0;
}

function orderPageNumber(person) {
  if (person[1] !== person[0] + 1) {
    return "error";
  }

  return 0;
}

function getResult(score, error) {
  if (error[0] === 0 && error[1] === 0) {
    if (score[0] > score[1]) {
      return 1;
    }
    if (score[0] === score[1]) {
      return 0;
    }
    if (score[0] < score[1]) {
      return 2;
    }
  }

  return -1;
}

module.exports = problem1;
