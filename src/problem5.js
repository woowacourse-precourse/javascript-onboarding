function problem5(money) {
  const price = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  const answer = Array.from({ length: price.length }, () => 0)

  for (let i = 0; i < price.length; i++) {
    if (money / price[i] > 0) {
      const count = Math.floor(money / price[i])

      answer[i] = count
      money -= price[i] * count
    }
  }

  return answer
}

module.exports = problem5
