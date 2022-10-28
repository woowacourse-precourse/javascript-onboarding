function problem1(pobi, crong) {
  let pobiMax = getMax(pobi);
  let crongMax = getMax(crong);

  if (pobiMax > crongMax) return 1;
  if (pobiMax === crongMax) return 0;
  else return 2;

  function numToDigit(pages) {
    return pages.map((page) =>
      page
        .toString()
        .split("")
        .map((digit) => digit * 1)
    );
  }

  function getMax(nums) {
    let calcResults = numToDigit(nums)
      .map((pageDigits) => [
        pageDigits.reduce(sum),
        pageDigits.reduce(multiply),
      ])
      .flat();
    return Math.max(...calcResults);
  }

  function sum(a, b) {
    return a + b;
  }
  function multiply(a, b) {
    return a * b;
  }
}

module.exports = problem1;
