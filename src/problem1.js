function problem1(pobi, crong) {
  const MIN = 1;
  const MAX = 400;

  function getSum(page) {
    return String(page).split("").reduce((acc, curr) => acc += Number(curr), 0);
  }
}

module.exports = problem1;
