function problem5(money) {
  let result = [];
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const push_result = (cnt) => {
    result.push(cnt);
  };

  const isLastIndex = (index) => {
    return index == 8;
  };

  const find_cnt_of_cash = (money, index) => {
    if (isLastIndex(index)) {
      push_result(money);
      return;
    }
    if (money < cash[index]) {
      push_result(0);
      return find_cnt_of_cash(money, index + 1);
    }
    push_result(parseInt(money / cash[index]));
    return find_cnt_of_cash(money % cash[index], index + 1);
  };

  find_cnt_of_cash(money, 0);
  return result;
}

module.exports = problem5;
