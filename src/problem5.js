function bankWithdraw(wallet, coinIndex, money, pay) {
  const coinCount = parseInt(money / pay);
  wallet[coinIndex] += coinCount;
  money -= coinCount * pay;
  return money;
}

function problem5(money) {
  const wallet = Array(9).fill(0);

  while (money !== 0) {
    if (money >= 50000) {
      money = bankWithdraw(wallet, 0, money, 50000);
    } else if (money >= 10000) {
      money = bankWithdraw(wallet, 1, money, 10000);
    } else if (money >= 5000) {
      money = bankWithdraw(wallet, 2, money, 5000);
    } else if (money >= 1000) {
      money = bankWithdraw(wallet, 3, money, 1000);
    } else if (money >= 500) {
      money = bankWithdraw(wallet, 4, money, 500);
    } else if (money >= 100) {
      money = bankWithdraw(wallet, 5, money, 100);
    } else if (money >= 50) {
      money = bankWithdraw(wallet, 6, money, 50);
    } else if (money >= 10) {
      money = bankWithdraw(wallet, 7, money, 10);
    } else if (money >= 1) {
      money = bankWithdraw(wallet, 8, money, 1);
    }
  }

  return wallet;
}

module.exports = problem5;
