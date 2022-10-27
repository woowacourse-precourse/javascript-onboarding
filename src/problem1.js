function problem1(pobi, crong) {
  if (isValidCase(pobi, crong) === false) return -1;
}

function isValidCase (case1, case2) {
  if (case1[1] - case1[0] !== 1 || case2[1] - case2[0] !== 1) return false
  if (case1[0] % 2 !== 1 || case2[0] % 2 !== 1) return false
  if (case1[1] % 2 !== 0 || case1[1] % 2 !== 0) return false
}

module.exports = problem1;
