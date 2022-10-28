function problem5(money) {
  const answer = [];
  
  let temp = money.toString()
  const len = temp.toString().length
  let start = 0

  if (len >= 5) {
    start = len - 5 +1
    const [a,b] = transMoney(temp.slice(0, start))
    answer.push(a,b)
  }

  for (let i = start; i < len; i++) {
    const [a, b] = transMoney(temp[i])
    if (i === len -1) answer.push(temp[i]*1)
    else answer.push(a,b)
  }
  return answer;
}

function transMoney(money) {
  let sum = [0, 0]
  sum[0] = Math.floor(money/5)
  sum[1] = money%5
  return sum
}
module.exports = problem5;
