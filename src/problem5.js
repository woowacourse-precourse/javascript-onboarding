function problem5(money) {
  let balance = money
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  while (balance !== 0) {
    moneyArr.forEach((element, idx) => {
      if (balance >= element) {
        answer[idx] += parseInt(balance/element)
        balance = balance%element
      }
    })
  }
  return answer;
}

module.exports = problem5;
