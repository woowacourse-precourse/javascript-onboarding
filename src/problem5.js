function problem5(money) {
  const kindOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = Array(kindOfMoney.length).fill(0);

  kindOfMoney.forEach((cur, idx) => {
    answer[idx] = parseInt(money / cur);
    money %= cur;
  });

  return answer;
}

module.exports = problem5;
