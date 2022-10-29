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

function range(start, end) {
  return [...new Array(end - start).keys()].map((i) => i + start);
}

/**
 * Naive O(n log n) solution
 * @param {number} lastNumberInclusive
 * @returns number
 */
function naiveCountOfDigits369FromOneTo(lastNumberInclusive) {
  const result = range(1, lastNumberInclusive + 1)
    .map(countOfDigits369Of)
    .reduce((currentSum, currentCount) => currentSum + currentCount, 0);

  return result;
}

module.exports = {
  naiveCountOfDigits369FromOneTo,
};
