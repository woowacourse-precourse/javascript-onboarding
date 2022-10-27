function problem5(money) {
  let result = [];
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const cnt_of_cash = (money, index) => {
    if (index == 8) {
      result.push(money);
      return;
    }
    if (money < cash[index]) {
      result.push(0);
      return cnt_of_cash(money, index + 1);
    }
    result.push(parseInt(money / cash[index]));
    return cnt_of_cash(money % cash[index], index + 1);
  };
  cnt_of_cash(money, 0);
  return result;
}

module.exports = problem5;
