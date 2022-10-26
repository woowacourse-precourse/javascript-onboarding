function problem1(pobi, crong) {
  if (!(pobi[1] - pobi[0] === 1) || !(crong[1] - crong[0] === 1)) return -1

  let answer = 0

  const pobiScore = Math.max(...pobi.map((num) => findMaxScore(num)))
  const crongScore = Math.max(...crong.map((num) => findMaxScore(num)))

  if (pobiScore > crongScore) answer = 1
  return answer
}

function findMaxScore(num) {
  const numArr = num.toString().split("")
  const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)
  const mul = numArr.reduce((acc, cur) => acc * Number(cur), 1)
  return Math.max(sum, mul)
}

module.exports = problem1
