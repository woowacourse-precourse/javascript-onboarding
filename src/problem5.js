function problem5(money) {
  money_types = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  wallet_contents = [];

  for (var i = 0; i < money_types.length; i++) {
    wallet_contents.splice(i, 0, parseInt(money / money_types[i]));
    money %= money_types[i];
  }

  return wallet_contents;
}

module.exports = problem5;
