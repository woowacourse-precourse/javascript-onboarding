/**
 * @param {number} digits
 */
function calculateSumOfDigits(digits) {
  let sum = 0;
  for (const digit of String(digits)) {
    sum += Number(digit);
  }
  return sum;
}

/**
 * @param {number} digits
 */
function calculateProductOfDigits(digits) {
  let product = 1;
  for (const digit of String(digits)) {
    product *= Number(digit);
  }
  return product;
}

/**
 * @param {number} a
 * @param {number} b
 */
function getGreaterNumber(a, b) {
  return a >= b ? a : b;
}

/**
 * @param {number} leftPage
 * @param {number} rightPage
 */
function calculateScore(leftPage, rightPage) {
  const greaterNumFromLeft = getGreaterNumber(
    calculateSumOfDigits(leftPage),
    calculateProductOfDigits(leftPage)
  );
  const greaterNumFromRight = getGreaterNumber(
    calculateSumOfDigits(rightPage),
    calculateProductOfDigits(rightPage)
  );
  return getGreaterNumber(greaterNumFromLeft, greaterNumFromRight);
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
