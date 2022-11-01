function problem5(money) {
  const prices = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = Array.from(Array(9), () => 0);

  prices.forEach((price, index) => {
    answer[index] += Math.floor(money / price);
    money = money % price;
  });

  return answer;
}

module.exports = problem5;
