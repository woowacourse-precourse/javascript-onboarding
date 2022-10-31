function problem5(money) {
  var change = money;
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var coin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < coin.length; i++) {
    answer[i] = parseInt(change / coin[i]);
    change = change % coin[i];
  }
  console.log(answer);
  return answer;
}

module.exports = problem5;
