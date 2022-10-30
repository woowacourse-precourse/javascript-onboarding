function problem1(pobi, crong) {
  if (checkException(pobi) === -1 || checkException(crong) === -1) return -1;
}

function checkException(arr) {
  if (arr.length !== 2) return -1;
  if (arr[1] - arr[0] !== 1) return -1;
  if (arr.some((item) => item <= 1 || item >= 400)) return -1;
  return 1;
}

module.exports = problem1;
