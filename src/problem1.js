/**
 * @typedef {number & { __brand: "PageNumber" }} PageNumber
 */

/**
 * @param {unknown} x
 * @returns {PageNumber}
 */
function parsePageNumberOrThrow(x) {
  const isPageNumber =
    typeof x === "number" && x % 1 === 0 && x >= 1 && x <= 400;
  if (!isPageNumber) {
    throw new TypeError(`Expected PageNumber, got ${x}`);
  }
  return /** @type {PageNumber} */ (x);
}

/**
 * @typedef {[PageNumber, PageNumber] & {__brand: "PagePair"}} PagePair
 */

/**
 * @param {[PageNumber, PageNumber]} pagePair
 * @returns {PagePair}
 */
function parsePagePairOrThrow(pagePair) {
  const [leftPage, rightPage] = pagePair;
  const isLeftPageOddNumber = leftPage % 2 === 1 || leftPage % 2 === -1;
  const arePagesConsecutive = rightPage - leftPage === 1;
  const isValidPagePair = isLeftPageOddNumber && arePagesConsecutive;
  if (!isValidPagePair) {
    throw new TypeError(`Expected Valid PagePair, got ${pagePair}`);
  }
  return /** @type {PagePair} */ (pagePair);
}
