function addDigits(number) {
  let digits = number;
  let result = 0;

  while (digits > 0) {
    result += a % 10;
    digits = parseInt(a / 10);
  }

  return result;
}

function multiplyDigits(number) {
  let digits = number;
  let result = 1;

  while (digits > 0) {
    result *= a % 10;
    digits = parseInt(a / 10);
  }

  return result;
}

function getPageScores(pages) {
  const pageScores = pages.map((number) => {
    const addResult = addDigits(number);
    const multiplyResult = multiplyDigits(number);

    if (addResult > multiplyResult) {
      return addResult;
    }

    return multiplyResult;
  });

  return pageScores;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
