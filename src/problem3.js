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
  const count = number
    .toString()
    .split("")
    .reduce((a, b) => (is369(b) ? a + 1 : a), 0);
  return count;
}

function problem3(number) {
  var answer;

  answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += count369InNumber(i);
  }

  return answer;
}

module.exports = problem3;
