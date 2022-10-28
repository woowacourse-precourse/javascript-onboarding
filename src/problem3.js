/**
 * checks if the digit is 3 or 6 or 9.
 * @param {string} digit given digit
 * @returns {boolean} whether the digit is (3, 6, 9) or not.
 */
function is369(digit) {
  if (digit === "3") return true;
  if (digit === "6") return true;
  if (digit === "9") return true;
  return false;
}

/**
 * counts number of 3, 6, 9 in given number.
 * @param {number} number given number
 * @returns {int} number of 3, 6, 9 in given number
 */
function count369InNumber(number) {
  let count = number
    .toString()
    .split("")
    .reduce((a, b) => (is369(b) ? a + 1 : a), 0);
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
