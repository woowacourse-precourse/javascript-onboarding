function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1

  const pobiLeftMax = Math.max(getAddValue(pobi[0]), getMutiplyValue(pobi[0]))
  const pobiRightMax = Math.max(getAddValue(pobi[1]), getMutiplyValue(pobi[1]))

  const crongLeftMax = Math.max(
    getAddValue(crong[0]),
    getMutiplyValue(crong[0]),
  )

  const crongRightMax = Math.max(
    getAddValue(crong[1]),
    getMutiplyValue(crong[1]),
  )

  const pobiMax = Math.max(pobiLeftMax, pobiRightMax)
  const crongMax = Math.max(crongLeftMax, crongRightMax)

  return pobiMax > crongMax
    ? 1
    : pobiMax < crongMax
    ? 2
    : pobiMax === crongMax
    ? 0
    : -1
}

module.exports = problem1

function getAddValue(value) {
  let a = value
  let b = 0

  while (a / 10 > 0) {
    b += a % 10
    a = parseInt(a / 10)
  }
  return b
}

function getMutiplyValue(value) {
  let a = value
  let b = 1

  while (a / 10 > 0) {
    b = b * (a % 10)
    a = parseInt(a / 10)
  }

  return b
}
