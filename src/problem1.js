function problem1(pobi, crong) {
  if (checkIsError(pobi, crong)) return -1

  let answer = 0

  const pobiScore = Math.max(...pobi.map((num) => findMaxScore(num)))
  const crongScore = Math.max(...crong.map((num) => findMaxScore(num)))

  if (pobiScore > crongScore) answer = 1
  else if (pobiScore < crongScore) answer = 2

  return answer
}

function findMaxScore(num) {
  const numArr = num.toString().split("")
  const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)
  const mul = numArr.reduce((acc, cur) => acc * Number(cur), 1)
  return Math.max(sum, mul)
}

function checkIsError(pobi, crong) {
  // 왼쪽 페이지와 오른쪽 페이지의 차이는 1이어야한다.
  if (!(pobi[1] - pobi[0] === 1) || !(crong[1] - crong[0] === 1)) return true
  // 왼쪽 페이지는 항상 홀수이고 오른쪽 페이지는 항상 짝수이어야한다.
  if (pobi[0] % 2 === 0 || pobi[1] % 2 === 1) return true
  if (crong[0] % 2 === 0 || crong[1] % 2 === 1) return true
  // 왼쪽 페이지는 1 ~ 399 페이지이어야 한다.
  if (pobi[0] < 1 || pobi[0] > 399) return true
  if (crong[0] < 1 || crong[0] > 399) return true
  // 오른쪽 페이지는 2 ~ 400 페이지이어야 한다.
  if (pobi[1] < 2 || pobi[1] > 400) return true
  if (crong[1] < 2 || crong[1] > 400) return true
  // 인풋은 숫자이어야한다.
  if (typeof pobi[0] !== "number" || typeof pobi[1] !== "number") return true
  if (typeof crong[0] !== "number" || typeof crong[1] !== "number") return true

  return false
}

module.exports = problem1
