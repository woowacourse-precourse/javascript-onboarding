function problem1(pobi, crong) {}

const sumEachDigit = pageNum => {
  const sumNum = String(pageNum)
    .split('')
    .reduce((sum, current) => sum + parseInt(current, 10), 0)
  return sumNum
}

module.exports = problem1
