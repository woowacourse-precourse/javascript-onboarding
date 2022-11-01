function problem5(money) {
  const answer = new Array(9).fill(0);
  while (50000 <= money) {
    money -= 50000;
    answer[0] += 1;
  }
  while (10000 <= money) {
    money -= 10000;
    answer[1] += 1;
  }
  while (5000 <= money) {
    money -= 5000;
    answer[2] += 1;
  }
  while (1000 <= money) {
    money -= 1000;
    answer[3] += 1;
  }
  while (500 <= money) {
    money -= 500;
    answer[4] += 1;
  }
  while (100 <= money) {
    money -= 100;
    answer[5] += 1;
  }
  while (50 <= money) {
    money -= 50;
    answer[6] += 1;
  }
  while (10 <= money) {
    money -= 10;
    answer[7] += 1;
  }
  while (1 <= money) {
    money -= 1;
    answer[8] += 1;
  }
  return answer;
}

module.exports = problem5;
