const PAGE_MIN = 1;
const PAGE_MAX = 400;
const PAGES_LENGTH = 2;

/**
 * Checks if the input is number array of length 2.
 * @param {number[]} pages input given by function isPagesValid
 * @returns {boolean} whether the input is number array of length 2
 */
function isPagesArrayValid(pages) {
  if (!Array.isArray(pages)) return false;
  if (pages.some((p) => typeof p !== "number")) return false;
  return pages.length === PAGES_LENGTH;
}

/**
 * Checks if page number is between PAGE_MIN and PAGE_MAX.
 * @param {number} page page number
 * @returns {boolean} whether the page number is between PAGE_MIN and PAGE_MAX
 */
function isInRange(page) {
  if (page < PAGE_MIN) return false;
  if (page > PAGE_MAX) return false;
  return true;
}

/**
 * Checks if the input is in valid format.
 * @param {any} pages input given by function problem 1 (pobi or crong)
 * @returns {boolean} whether the input is in valid format
 */
function isPagesValid(pages) {
  if (!isPagesArrayValid(pages)) return false;
  let [leftPage, rightPage] = pages;
  if (!isInRange(leftPage) || !isInRange(rightPage)) return false;
  if (leftPage % 2 === 0 || rightPage % 2 === 1) return false;
  if (leftPage + 1 !== rightPage) return false;
  return true;
}

/**
 * Converts a number to array of digits
 * @param {number} page page number
 * @returns {number[]} converted digits in number array format
 */
function numberToDigits(page) {
  let stringArray = page.toString().split("");
  return stringArray.map((s) => +s);
}

/**
 * Caculates score from the given page numbers.
 * @param {number[]} pages number array of length 2 with page numbers in it
 * @returns {number} maximum score produced by the given page numbers
 */
function getScore(pages) {
  const pagesToDigitLeft = numberToDigits(pages[0]);
  const pagesToDigitRight = numberToDigits(pages[1]);

  const sumLeft = pagesToDigitLeft.reduce((a, b) => a + b, 0);
  const productLeft = pagesToDigitLeft.reduce((a, b) => a * b, 1);

  const sumRight = pagesToDigitRight.reduce((a, b) => a + b, 0);
  const productRight = pagesToDigitRight.reduce((a, b) => a * b, 1);

  return Math.max(sumLeft, productLeft, sumRight, productRight);
}

function problem1(pobi, crong) {
  var answer;

  if (!isPagesValid(pobi) || !isPagesValid(crong)) return -1;

  return answer;
}

module.exports = problem1;
