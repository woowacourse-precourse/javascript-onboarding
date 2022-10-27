/**
 * splitNumberToDigits
 * @type {(n: number) => number[]}
 */
const splitNumberToDigits = (n) => n.toString().split("").map(Number);

/**
 * range
 * @type {(n: number) => number[]}
 */
const range = (n) => [...Array(n).keys()];

/**
 * problem3
 * @type {(number: number) => number}
 */
function problem3(number) {
  return range(number + 1)
    .map(splitNumberToDigits)
    .flat()
    .filter((v) => [3, 6, 9].includes(v)).length;
}

module.exports = problem3;
