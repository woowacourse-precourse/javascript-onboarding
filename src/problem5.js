function problem5(money) {
  let answer = [];
  let money_unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

  for (const unit of money_unit) {
    let count = (money - (money % unit)) / unit
    money = money % unit
    answer.push(count)
  }

  return answer;
}

module.exports = problem5;
