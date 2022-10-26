const ARR_LENGTH = 2;

function sumAllDigitNumber(page) {
  let result = 0;
  for (let i = 0; i < page.length; i++) {
    result += +page[i];
  }
  return result;
}

function mulAllDigitNumber(page) {
  let result = +page[0];
  for (let i = 1; i < page.length; i++) {
    result *= +page[i];
  }
  return result;
}

function problem1(pobi, crong) {
  var answer;

  return answer;
}

module.exports = problem1;
