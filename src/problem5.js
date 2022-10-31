function problem5(money) {
  let coin_types = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = Array(coin_types.length).fill(0);

  for (let i = 0; i < coin_types.length; i++) {
    answer[i] += parseInt(money / coin_types[i]);
    money %= coin_types[i];
  }

  return answer;
}

module.exports = problem5;