function problem5(money) {
  let answer = [];

  const array = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let coin of array) {
    answer.push(Math.floor(money / coin));
    money -= coin * Math.floor(money / coin);
  }
  return answer;
}

module.exports = problem5;
