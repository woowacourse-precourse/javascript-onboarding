function problem1(pobi, crong) {
  if (!isContinue(pobi, crong)) return -1;
  if (!isOddEven(pobi, crong)) return -1;
  if (!isInrange(pobi, crong)) return -1;

  let pobiMax = getMax(pobi);
  let crongMax = getMax(crong);

  if (pobiMax > crongMax) return 1;
  if (pobiMax === crongMax) return 0;
  else return 2;

  function isContinue(a, b) {
    if (a[1] - a[0] === 1 && b[1] - b[0] === 1) return true;
    else return false;
  }

  function isOddEven(a, b) {
    if (a[1] % 2 === 0 && a[0] % 2 === 1 && b[1] % 2 === 0 && b[0] % 2 === 1)
      return true;
    else return false;
  }

  function isInrange(a, b) {
    if (a[0] >= 1 && a[1] <= 400 && b[0] >= 1 && b[1] <= 400) return true;
    else return false;
  }

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
