function problem5(money) {
  const MONEYUNIT = [10000, 1000, 100, 10, 1]
  const WALLET = [];
  
  MONEYUNIT.map((unit, i) => {
    if(i === 4) return WALLET.push(money);
    else {
      const Q = money / unit;
      const R = money % unit
      WALLET.push(...calculate(Q))
      money = R;
    } 
  })
  return WALLET;
}

console.log(problem5(50237))

function calculate(Q) {
    return [parseInt(Q/5, 10), parseInt(Q%5, 10)];
}

// module.exports = problem5;
