/**
 * splitNumberToDigits
 * @type {(n: number) => number[]}
 */
const splitNumberToDigits = (n) => n.toString().split("").map(Number);

const add = (a, b) => a + b;

/**
 * range
 * @type {(n: number) => number[]}
 */
const range = (n) => [...Array(n).keys()];

const filterArrayIncluded = (iter, container) =>
  iter.filter((v) => container.includes(v));

/**
 * problem3
 * @type {(number: number) => number}
 */
function problem3(number) {
  const clapNumbers = [3, 6, 9];

  return range(number + 1)
    .map(splitNumberToDigits)
    .map((digits) => filterArrayIncluded(digits, clapNumbers).length)
    .reduce(add, 0);
}

module.exports = problem3;
