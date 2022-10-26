function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1

  const pobiScore = Math.max(
    ...pobi.map(pageNum => Math.max(sumEachDigit(pageNum), multiplyEachDigit(pageNum)))
  )
  const crongScore = Math.max(
    ...crong.map(pageNum => Math.max(sumEachDigit(pageNum), multiplyEachDigit(pageNum)))
  )
  return pobiScore > crongScore ? 1 : pobiScore < crongScore ? 2 : 0
}

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
