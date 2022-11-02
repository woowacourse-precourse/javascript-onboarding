function problem1(pobi, crong) {
  if (!isValidPages(pobi)) return -1
  if (!isValidPages(crong)) return -1

  const pobiPoints = pobi.map((page) => onePageMaxPoint(splitNumber(page)))
  const crongPoints = crong.map((page) => onePageMaxPoint(splitNumber(page)))

  const pobiMaxPoint = Math.max(...pobiPoints)
  const crongMaxPoint = Math.max(...crongPoints)

  if (pobiMaxPoint > crongMaxPoint) return 1
  if (pobiMaxPoint < crongMaxPoint) return 2
  if (pobiMaxPoint === crongMaxPoint) return 0
  return -1
}

function isValidPages (pages) {
  if (pages[1] - pages[0] !== 1) return false
  if (pages[0] % 2 !== 1) return false
  if (pages[1] % 2 !== 0) return false
  return true
}

function splitNumber(num) {
  const strNumArr = num.toString().split("")
  return strNumArr.map((strNum) => Number(strNum))
}

function onePageMaxPoint(pageNumArr) {
  const sum = pageNumArr.reduce((acc, cur) => acc + cur)
  const times = pageNumArr.reduce((acc, cur) => acc * cur)
  return Math.max(sum, times)
}

module.exports = problem1;
