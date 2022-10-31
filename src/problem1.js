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

/**
 * @param {PagePair} pagePair
 * @returns {number}
 */
function getScore(pagePair) {
  /**
   * @param {PageNumber} pageNumber
   * @returns {number[]}
   */
  function getDigitsAsLittleEndian(pageNumber) {
    const littleEndianDigits = [];
    let remainingDigits = /** @type {number} */ (pageNumber);
    while (remainingDigits > 0) {
      const q = Math.floor(remainingDigits / 10);
      const r = remainingDigits - 10 * q;
      getDigitsAsLittleEndian;
      const onesDigit = r;
      littleEndianDigits.push(onesDigit);

      remainingDigits = q;
    }
    return littleEndianDigits;
  }

  /**
   * @param {PageNumber} page
   * @returns {number}
   */
  function getMaxSumOrProduct(page) {
    const digits = getDigitsAsLittleEndian(page);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    const product = digits.reduce((acc, digit) => acc * digit, 1);
    return Math.max(sum, product);
  }

  const [leftPage, rightPage] = pagePair;
  const leftScore = getMaxSumOrProduct(leftPage);
  const rightScore = getMaxSumOrProduct(rightPage);
  return Math.max(leftScore, rightScore);
}

/** @typedef {-1} Invalid */
/** @typedef {0} Tie */
/** @typedef {1} PobiWin */
/** @typedef {2} CrongWin */

/**
 *
 * @param {unknown} pobi
 * @param {unknown} crong
 * @returns {Invalid | Tie | PobiWin | CrongWin}
 */
function problem1(pobi, crong) {
  const [INVALID, TIE, POBI_WIN, CRONG_WIN] =
    /** @type {[Invalid, Tie, PobiWin, CrongWin]} */ ([-1, 0, 1, 2]);

  /**
   * @param {unknown} input
   * @returns {[unknown, unknown]}
   */
  function parsePairOrThrow(input) {
    if (!(input instanceof Array) || input.length !== 2) {
      throw new TypeError(`Expected a length-2 array, got ${input}`);
    }
    const [first, second] = input;
    return [first, second];
  }

  /**
   * @param {unknown} input
   * @returns {PagePair}
   */
  function parseInputOrThrow(input) {
    const [left, right] = parsePairOrThrow(input);
    const leftPage = parsePageNumberOrThrow(left);
    const rightPage = parsePageNumberOrThrow(right);
    const pagePair = parsePagePairOrThrow([leftPage, rightPage]);
    return pagePair;
  }

  /** @type {PagePair} */
  let pobiPagePair;
  /** @type {PagePair} */
  let crongPagePair;
  try {
    pobiPagePair = parseInputOrThrow(pobi);
    crongPagePair = parseInputOrThrow(crong);
  } catch {
    return INVALID;
  }

  const pobiScore = getScore(pobiPagePair);
  const crongScore = getScore(crongPagePair);

  if (pobiScore > crongScore) {
    return POBI_WIN;
  }
  if (pobiScore < crongScore) {
    return CRONG_WIN;
  }
  return TIE;
}

module.exports = problem1;
