function problem1(pobi, crong) {
  const leftValues = calculatePageNumber(pobi[0]);
  const rightValues = calculatePageNumber(pobi[1]);
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

module.exports = problem1;
