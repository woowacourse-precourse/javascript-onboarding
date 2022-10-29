function problem5(money) {
  const MONEYUNIT = [10000, 1000, 100, 10, 1]
  const WALLET = [];
  
  MONEYUNIT.map((unit, i) => {
      const Q = money / unit;
      const R = money % unit
      money = R;
      console.log(Q,R);
  })
}

console.log(problem5(50237));

// module.exports = problem5;
