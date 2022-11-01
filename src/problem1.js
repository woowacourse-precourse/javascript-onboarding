function problem1(pobi, crong) {
  // 각 페이지가 연속된 페이지가 아니라면 -1 리턴
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1

  // 왼쪽 페이지가 짝수이거나 오른쪽 페이지가 홀수면 -1 리턴
  if (
    pobi[0] % 2 === 0 ||
    pobi[1] % 2 === 1 ||
    crong[0] % 2 === 0 ||
    crong[1] % 2 === 1
  )
    return -1

  // 페이지 번호가 1~400 사이가 아니고, 첫번째 페이지와 마지막 페이지면 -1 리턴
  if (pobi[0] <= 2 || pobi[1] >= 399 || crong[0] <= 2 || crong[1] >= 399)
    return -1

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
  return `${value}`.split("").reduce((prev, curr) => prev + +curr, 0)
}

function getMutiplyValue(value) {
  return `${value}`.split("").reduce((prev, curr) => prev * +curr, 1)
}
