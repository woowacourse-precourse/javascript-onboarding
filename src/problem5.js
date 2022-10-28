function problem5(money) {
  var answer;

  const moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const moneyCountGetter = (money, moneys) => {
    const moneyCount = [];

    moneys.map( moneyUnit => {
    
      moneyCount.push(Math.floor(money / moneyUnit));
      money = money % moneyUnit;
    }) 

    return moneyCount;
  }

  if(money < 10) {
    answer = [0, 0, 0, 0, 0, 0, 0, 0, money];
  } else {
    answer = moneyCountGetter(money, moneys);
  }

  return answer;
}

module.exports = problem5;
