const moneyChanger = (money) => {
  let monetaryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for(let i=0; i<monetaryUnit.length; i++) {
    let numberOfMoney = parseInt(money/monetaryUnit[i]);
    money = parseInt(money%monetaryUnit[i]);
    
    console.log(numberOfMoney);
  }
  console.log();
}

function problem5(money) {
  moneyChanger(money);
}

problem5(50237);
problem5(15000);

module.exports = problem5;
