const PAGE_MIN = 1;
const PAGE_MAX = 400;
const PAGES_LENGTH = 2;

/**
 * Checks if the input is number array of length 2.
 * @param {number[]} pages input given by function isPagesValid
 * @return
 */
function isPagesArrayValid(pages) {
  if (!Array.isArray(pages)) return false;
  if (pages.some((p) => typeof p !== "number")) return false;
  return pages.length === PAGES_LENGTH;
}

/**
 * Checks if page number is between PAGE_MIN and PAGE_MAX.
 * @param {number} page a page number
 */
function isInRange(page) {
  if (page < PAGE_MIN) return false;
  if (page > PAGE_MAX) return false;
  return true;
}

/**
 * Checks if the input is in valid format.
 * @param {any} pages input given by function problem 1 (pobi or crong)
 */
function isPagesValid(pages) {
  if (!isPagesArrayValid(pages)) return false;
  let [leftPage, rightPage] = pages;
  if (!isInRange(leftPage) || !isInRange(rightPage)) return false;
  if (leftPage % 2 === 0 || rightPage % 2 === 1) return false;
  if (leftPage + 1 !== rightPage) return false;
  return true;
}

function problem1(pobi, crong) {
  var answer;

  if (!isPagesValid(pobi) || !isPagesValid(crong)) return -1;

  return answer;
}

module.exports = problem1;
