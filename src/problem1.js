const exceptionHandler = {
  /**
   * @param {[number, number]} pageList
   */
  checkPageAllowance(pageList) {
    return !(pageList[0] === 1 || pageList[1] === 400);
  },

  /**
   * @param {[number, number]} pageList
   */
  checkPageContinuity(pageList) {
    return pageList[1] - pageList[0] === 1;
  },
};

/* Functions below */

/**
 * @param {[number, number]} pageList
 */
function isPageListValid(pageList) {
  if (!exceptionHandler.checkPageAllowance(pageList)) return false;
  if (!exceptionHandler.checkPageContinuity(pageList)) return false;
  return true;
}

/**
 * @param {number} digits
 */
function calculateSumOfDigits(digits) {
  let sum = 0;
  for (const digit of String(digits)) {
    sum += Number(digit);
  }
  return sum;
}

/**
 * @param {number} digits
 */
function calculateProductOfDigits(digits) {
  let product = 1;
  for (const digit of String(digits)) {
    product *= Number(digit);
  }
  return product;
}

/**
 * @param {number} a
 * @param {number} b
 */
function getGreaterNumber(a, b) {
  return a >= b ? a : b;
}

/**
 * @param {[number, number]} pageList
 */
function calculateScore(pageList) {
  const greaterNumFromLeft = getGreaterNumber(
    calculateSumOfDigits(pageList[0]),
    calculateProductOfDigits(pageList[0])
  );
  const greaterNumFromRight = getGreaterNumber(
    calculateSumOfDigits(pageList[1]),
    calculateProductOfDigits(pageList[1])
  );
  return getGreaterNumber(greaterNumFromLeft, greaterNumFromRight);
}

function problem1(pobi, crong) {
  if (!(isPageListValid(pobi) && isPageListValid(crong))) return -1;
  const pobiScore = calculateScore(pobi);
  const crongScore = calculateScore(crong);
  if (pobiScore === crongScore) return 0;
  return pobiScore > crongScore ? 1 : 2;
}

module.exports = problem1;
