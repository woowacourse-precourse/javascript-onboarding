/**
 * Check for valid value
 * @param {number} num
 * @returns {boolean}
 */
 function checkValidation(num) {
  if (Number.isInteger(num) && num > 0 && num <= 10000)
    return true;
  return false;
}

/**
 * 
 * @param {number} num
 * @returns {number} count of 3, 6, 9
 */
function countOf369(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, cur) => {
      const n = parseInt(cur);
      return acc + (n % 3 === 0 && n !== 0 ? 1 : 0);
    }, 0);
}

function problem3(num) {
  if (!checkValidation(num))
    return -1;
  return Array.from({length: num})
    .reduce((acc, _, idx) => acc + countOf369(idx + 1), 0);
}

module.exports = problem3;
