/**
 * @type {(a: number, b: number) => number}
 */
const add = (a, b) => a + b;

/**
 * @type {(a: number, b: number) => number}
 */
const multiply = (a, b) => a * b;

/**
 * calculatePageScore
 * Calculate max value between multiplication and sum of page number
 * @type {(page: number) => number}
 */
const calculatePageScore = (page) => {
  const splittedPage = page.toString().split("").map(Number);
  return Math.max(
    splittedPage.reduce(add, 0),
    splittedPage.reduce(multiply, 1)
  );
};

const calculateMyScore = (pages) => Math.max(...pages.map(calculatePageScore));

/**
 * problem 1
 * @type {(pobi: number[], crong: number[]) => (-1 | 0 | 1 | 2)}
 */
function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
