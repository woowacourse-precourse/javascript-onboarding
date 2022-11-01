/**
 * @param {number} digits
 */
function getSumOfDigits(digits) {
  let sum = 0;
  for (const digit of String(digits)) {
    sum += Number(digit);
  }
  return sum;
}

/**
 * @param {number} digits
 */
function getProductOfDigits(digits) {
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
  if (a === b) return;
  return a > b ? a : b;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
