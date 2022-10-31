function problem1(pobi, crong) {
  const MIN = 1;
  const MAX = 400;

  function getSum(page) {
    return String(page).split("").reduce((acc, curr) => acc += Number(curr), 0);
  }

  function getMul(page) {
    return String(page).split("").reduce((acc, curr) => acc *= Number(curr), 1);
  }

  function getMaxScore(pages) {
    const [left, right] = pages;
    return Math.max(getSum(left), getSum(right), getMul(left), getMul(right));
  }
}

module.exports = problem1;
