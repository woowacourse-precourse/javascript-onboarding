/**
 * 1. make array of numbers from 1 to number
 * 2. filter numbers that include 3, 6, 9
 * 3. return length of filtered array
 * @param {number} number 
 * @returns {number}
 */

function problem3(number) {
  let targetArr = [
    ...Array(number)
      .fill()
      .map((_, idx) => idx + 1)
      .join(''),
  ].filter((x) => ['3', '6', '9'].includes(x));

  return targetArr.length;
}

module.exports = problem3;
