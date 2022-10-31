function problem5(money) {
  const MONEYUNIT = [10000, 1000, 100, 10, 1]
  
  const answer = MONEYUNIT.map((unit, i) => {
    if(i === 4) return money;
    else {
      const Q = money / unit;
      money = money % unit
      return calculate(Q)
    } 
  })

  return answer.flat();
}

function calculate(Q) {
    return [parseInt(Q/5, 10), parseInt(Q%5, 10)];
}

module.exports = problem5;
