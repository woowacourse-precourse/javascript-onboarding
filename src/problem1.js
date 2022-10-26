/**
 * @type {(a: number, b: number) => number}
 */
const add = (a, b) => a + b;

/**
 * @type {(a: number, b: number) => number}
 */
const multiply = (a, b) => a * b;

/**
 * @type {(a: number, b: number) => number}
 */
const minus = (a, b) => a - b;

const isEven = (n) => (n % 2 == 0 ? true : false);

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

/**
 * calculateMyScore
 * Calculate max value between left page score and right page score
 * @type {(pages: number[]) => number}
 */
const calculateMyScore = (pages) => Math.max(...pages.map(calculatePageScore));

/**
 * problem 1
 * @type {(pobi: number[], crong: number[]) => (-1 | 0 | 1 | 2)}
 */
function problem1(pobi, crong) {
  const ARR_LENGTH = 2;
  const MIN_PAGE = 2;
  const MAX_PAGE = 399;

  if (pobi === undefined || crong === undefined) return -1;
  if (pobi.length !== ARR_LENGTH || crong.length !== ARR_LENGTH) return -1;
  if (minus(pobi[0], pobi[1]) !== -1 || minus(crong[0], crong[1]) !== -1)
    return -1;
  if (
    pobi[0] < MIN_PAGE ||
    pobi[1] > MAX_PAGE ||
    crong[0] < MIN_PAGE ||
    crong[1] > MAX_PAGE
  )
    return -1;
  if (isEven(pobi[0]) || isEven(crong[0])) return -1;

  const pobiScore = calculateMyScore(pobi);
  const crongScore = calculateMyScore(crong);

  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return 0;
}

module.exports = problem1;
