function problem1(pobi, crong) {}

const sumEachDigit = pageNum => {
  const sumNum = String(pageNum)
    .split('')
    .reduce((sum, current) => sum + parseInt(current, 10), 0)
  return sumNum
}
const multiplyEachDigit = pageNum => {
  const mulNum = String(pageNum)
    .split('')
    .reduce((mul, current) => mul * parseInt(current, 10), 1)
  return mulNum
}

module.exports = problem1
