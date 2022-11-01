function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let m = money;

  for (let i = 0; m > 0; i++) {
    if (m / 50000 >= 1) {
      answer[0]++;
      m -= 50000;
    } else if (m / 10000 >= 1) {
      answer[1]++;
      m -= 10000;
    } else if (m / 5000 >= 1) {
      answer[2]++;
      m -= 5000;
    } else if (m / 1000 >= 1) {
      answer[3]++;
      m -= 1000;
    } else if (m / 500 >= 1) {
      answer[4]++;
      m -= 500;
    } else if (m / 100 >= 1) {
      answer[5]++;
      m -= 100;
    } else if (m / 50 >= 1) {
      answer[6]++;
      m -= 50;
    } else if (m / 10 >= 1) {
      answer[7]++;
      m -= 10;
    } else if (m / 1 >= 1) {
      answer[8]++;
      m -= 1;
    }
  }

  return answer;
}

module.exports = problem5;
