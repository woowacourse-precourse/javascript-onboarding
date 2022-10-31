function problem5(money) {
  var answer = [];
  let coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < coins.length; i++) {
    answer.push(Math.floor(money / coins[i]));
    money = money % coins[i];
  }
  console.log(answer);
  return answer;
}
problem5(15000);
module.exports = problem5;
