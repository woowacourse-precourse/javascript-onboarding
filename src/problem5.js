function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let coinPointer = 0;
  while (money > 0) {
    if (money >= coins[coinPointer]) {
      money -= coins[coinPointer];
      answer[coinPointer]++;
    } else {
      coinPointer++;
    }
  }
  return answer;
}

module.exports = problem5;
