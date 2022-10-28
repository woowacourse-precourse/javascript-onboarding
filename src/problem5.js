function problem5(money) {
  const money_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = [];

  for (let i = 0; i < money_list.length; i++) {
    wallet.push(Math.floor(money / money_list[i]));
    money %= money_list[i];
  }
  return wallet;
}
module.exports = problem5;
