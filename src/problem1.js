/**
 * @param {number} digits
 * @returns number
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
 * @returns number
 */
function getProductOfDigits(digits) {
  let product = 1;
  for (const digit of String(digits)) {
    product *= Number(digit);
  }
  return product;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
