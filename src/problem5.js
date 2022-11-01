function problem5(money) {
  const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  let curr = money

  const answer = bills.map((bill, index) => {
    const result = parseInt(curr / bill)

    curr = curr - bill * result
    return result
  })

  return answer
}

module.exports = problem5
