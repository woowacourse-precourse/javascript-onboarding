function problem5(money) {
  return getWallet(money)
}

function getWallet(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = {
    money : money,
    billsAndCoins: []
  }

  units.forEach(unit => {
    getChangeForUnit(wallet, unit);
  });
  
  return wallet.billsAndCoins;
}

function getChangeForUnit(wallet, unit) {
  var money = wallet.money;
  var bills = 0;
  
  if(money >= unit) {
    bills = Math.floor(money/unit)
    money = money - (unit*bills)
  }

  wallet.money = money
  wallet.billsAndCoins.push(bills)
}

module.exports = problem5;
