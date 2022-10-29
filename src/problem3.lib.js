/**
 * Naive O(n log n) solution
 * @param {number} lastNumberInclusive
 * @returns number
 */
function naiveCountOfDigits369FromOneTo(lastNumberInclusive) {
  // This function is O(n log n)
  function countOfDigits369(n) {
    const numberAsString = n.toString(10);
    const countOf369 = [...numberAsString].filter(
      (digit) => digit === "3" || digit === "6" || digit === "9"
    ).length;
    return countOf369;
  }

  const result = [...new Array(lastNumberInclusive).keys()]
    .map((i) => i + 1)
    .map(countOfDigits369)
    .reduce((currentSum, currentCount) => currentSum + currentCount, 0);

  return result;
}

module.exports = {
  naiveCountOfDigits369FromOneTo,
};
