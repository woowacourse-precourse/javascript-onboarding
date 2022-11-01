function problem5(money) {
  let answer = [];
  let coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < coins.length; i++) {
    answer.push(parseInt(money / coins[i]));
    money = parseInt(money % coins[i]);
  }
  console.log(answer);
  return answer;
}

module.exports = problem5;
