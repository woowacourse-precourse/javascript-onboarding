function problem5(money) {
  // 돈 종류 (순서대로 5만원 ~ 일원)
  const changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

  // changes 순서대로 거스름돈 지급
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < changes.length; i++) {
    result[i] = parseInt(money / changes[i])
    money %= changes[i]
  }

  return result
}

module.exports = problem5;
