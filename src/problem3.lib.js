/**
 * Helper function with asymptotic complexity O(log n)
 * @param {number} n
 * @returns number
 */
function countOfDigits369Of(n) {
  const numberAsString = n.toString(10);
  const countOf369 = [...numberAsString].filter(
    (digit) => digit === "3" || digit === "6" || digit === "9"
  ).length;
  return countOf369;
}

/** Start inclusive, end exclusive */
function range(start, end) {
  return [...new Array(end - start).keys()].map((i) => i + start);
}

/**
 * Naive O(n log n) solution
 * @param {number} lastNumberInclusive
 * @returns number
 */
function naiveCountDigits369FromOneTo(lastNumberInclusive) {
  const result = range(1, lastNumberInclusive + 1)
    .map(countOfDigits369Of)
    .reduce((currentSum, currentCount) => currentSum + currentCount, 0);

  return result;
}

/**
 * O(log n) solution.
 * @param {number} lastNumberExclusive
 * @returns {number}
 */
function countDigits369FromZeroUntil(lastNumberExclusive) {
  // We split 0..lastNumberExclusive-1 to groups of 10.
  // Groups: range(0, 10), range(10, 20), ..., range(10q-10, 10q)
  // Remaining: range(10q, 10q+r)
  const q = Math.floor(lastNumberExclusive / 10);

  const remainingNumbers = range(10 * q, lastNumberExclusive);
  const countOf369InRemainingNumbers = remainingNumbers
    .map(countOfDigits369Of)
    .reduce((acc, count) => acc + count, 0);

  let countOf369InGroups = 0;
  if (q > 0) {
    const countOf369InGroupsInLastDigit = 3 * q;
    const countOf369InGroupsNotInLastDigit = 10 * countDigits369FromZeroUntil(q);
    countOf369InGroups = countOf369InGroupsInLastDigit + countOf369InGroupsNotInLastDigit;
  }

  return countOf369InGroups + countOf369InRemainingNumbers;
}

module.exports = {
  naiveCountDigits369FromOneTo,
  countDigits369FromZeroUntil,
  range,
};
