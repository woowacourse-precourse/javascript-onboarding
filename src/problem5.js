function problem5(money) {
  var answer = exchangeMoney(money);
  return answer;
}

const exchangeMoney = (money) => {
  const changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [changes.length];

  changes.forEach((change, idx) => {
    result[idx] = Math.floor(money / change);
    money = money % change;
  });

  return result;
};

module.exports = problem5;
