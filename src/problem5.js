function bankWithdraw({ wallet, coinIndex, money, pay }) {
  const coinCount = parseInt(money / pay);
  wallet[coinIndex] += coinCount;
  money -= coinCount * pay;
  return money;
}

const withdrawMap = {
  50000(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 0, money, pay: 50000 });
  },
  10000(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 1, money, pay: 10000 });
  },
  5000(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 2, money, pay: 5000 });
  },
  1000(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 3, money, pay: 1000 });
  },
  500(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 4, money, pay: 500 });
  },
  100(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 5, money, pay: 100 });
  },
  50(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 6, money, pay: 50 });
  },
  10(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 7, money, pay: 10 });
  },
  1(wallet, money) {
    return bankWithdraw({ wallet, coinIndex: 8, money, pay: 1 });
  },
};

function problem5(money) {
  const wallet = Array(9).fill(0);

  while (money !== 0) {
    if (money >= 50000) {
      money = withdrawMap[50000](wallet, money);
    } else if (money >= 10000) {
      money = withdrawMap[10000](wallet, money);
    } else if (money >= 5000) {
      money = withdrawMap[5000](wallet, money);
    } else if (money >= 1000) {
      money = withdrawMap[1000](wallet, money);
    } else if (money >= 500) {
      money = withdrawMap[500](wallet, money);
    } else if (money >= 100) {
      money = withdrawMap[100](wallet, money);
    } else if (money >= 50) {
      money = withdrawMap[50](wallet, money);
    } else if (money >= 10) {
      money = withdrawMap[10](wallet, money);
    } else if (money >= 1) {
      money = withdrawMap[1](wallet, money);
    }
  }

  return wallet;
}

module.exports = problem5;
