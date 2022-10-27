function problem5(money) {
  var answer;

  const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  answer = new Array(moneyUnits.length).fill(0)

  let lastMoney = money
  for (let i = 0; i < moneyUnits.length; i++) {
    const unit = moneyUnits[i];
    const currentUnitCount = Math.floor(lastMoney / unit)

    answer[i] = currentUnitCount
    lastMoney -= currentUnitCount * unit
    
    if(lastMoney === 0)break
  }

  return answer;
}

module.exports = problem5;
