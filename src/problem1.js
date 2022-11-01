function problem1(pobi, crong) {
  if (isException(pobi, crong)) return -1;
}

function isException(pobi, crong) {
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400)
    return true;
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return true;
  if (
    pobi[0] % 2 !== 1 ||
    pobi[1] % 2 !== 0 ||
    crong[0] % 2 !== 1 ||
    crong[1] % 2 !== 0
  )
    return true;
  return false;
}

module.exports = problem1;
