function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let total = money;
  while (total >= 50000) {
    total -= 50000;
    answer[0]++;
  }

  while (total >= 10000) {
    total -= 10000;
    answer[1]++;
  }

  while (total >= 5000) {
    total -= 5000;
    answer[2]++;
  }

  while (total >= 1000) {
    total -= 1000;
    answer[3]++;
  }

  while (total >= 500) {
    total -= 500;
    answer[4]++;
  }

  while (total >= 100) {
    total -= 100;
    answer[5]++;
  }

  while (total >= 50) {
    total -= 50;
    answer[6]++;
  }

  while (total >= 10) {
    total -= 10;
    answer[7]++;
  }

  while (total >= 1) {
    total -= 1;
    answer[8]++;
  }

  return answer;
}

problem5(50237)
module.exports = problem5;
