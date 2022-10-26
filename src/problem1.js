function problem1(pobi, crong) {
  if (!(pobi[1] - pobi[0] === 1) || !(crong[1] - crong[0] === 1)) return -1

  let answer = 0
  const pobiScore = [],
    crongScore = []

  pobi.forEach((num) => {
    const numArr = num.toString().split("")
    const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)
    const mul = numArr.reduce((acc, cur) => acc * Number(cur), 1)
    pobiScore.push(Math.max(sum, mul))
  })
  crong.forEach((num) => {
    const numArr = num.toString().split("")
    const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)
    const mul = numArr.reduce((acc, cur) => acc * Number(cur), 1)
    crongScore.push(Math.max(sum, mul))
  })

  const pobiMax = Math.max(...pobiScore),
    crongMax = Math.max(...crongScore)

  if (pobiMax > crongMax) answer = 1
  else answer = 2

  return answer
}

module.exports = problem1
