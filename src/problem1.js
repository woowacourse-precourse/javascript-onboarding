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

/**
 * @type {(n: number) => boolean}
 */
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

  /**
   * @type {{POBI_WIN: 1, CRONG_WIN: 2, DRAW: 0, EXCEPTION: -1}}
   */
  const resultState = {
    POBI_WIN: 1,
    CRONG_WIN: 2,
    DRAW: 0,
    EXCEPTION: -1,
  };

  if (pobi === undefined || crong === undefined) return resultState.EXCEPTION;
  if (pobi.length !== ARR_LENGTH || crong.length !== ARR_LENGTH)
    return resultState.EXCEPTION;
  if (minus(pobi[0], pobi[1]) !== -1 || minus(crong[0], crong[1]) !== -1)
    return resultState.EXCEPTION;
  if (
    pobi[0] < MIN_PAGE ||
    pobi[1] > MAX_PAGE ||
    crong[0] < MIN_PAGE ||
    crong[1] > MAX_PAGE
  )
    return resultState.EXCEPTION;
  if (isEven(pobi[0]) || isEven(crong[0])) return resultState.EXCEPTION;

  const pobiScore = calculateMyScore(pobi);
  const crongScore = calculateMyScore(crong);

  if (pobiScore > crongScore) return resultState.POBI_WIN;
  else if (pobiScore < crongScore) return resultState.CRONG_WIN;
  else return resultState.DRAW;
}

module.exports = problem1;
