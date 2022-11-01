const withrawCash = ({ wallet, money }) => {
  let remainingMoney = money;

  const billsAndCoins = Array.from(wallet.keys());

  for (const billCoin of billsAndCoins) {
    if (remainingMoney < billCoin) {
      continue;
    }

    const billCoinCount = parseInt(remainingMoney / billCoin);
    wallet.set(billCoin, billCoinCount);
    remainingMoney -= billCoinCount * billCoin;
  }
};

const problem5 = (money) => {
  const wallet = new Map()
    .set(50000, 0)
    .set(10000, 0)
    .set(5000, 0)
    .set(1000, 0)
    .set(500, 0)
    .set(100, 0)
    .set(50, 0)
    .set(10, 0)
    .set(1, 0);

  withrawCash({ wallet, money });

  const moneyCountInWallet = Array.from(wallet.values());

  return moneyCountInWallet;
};

module.exports = problem5;
