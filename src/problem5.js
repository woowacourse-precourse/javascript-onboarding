function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  while (money !== 0) {
    // 1. 5만원
    if (money >= 50000) {
      answer[0] += 1;
      money -= 50000;
    }
    // 2. 만원
    if (money >= 10000 && money < 50000) {
      answer[1] += 1;
      money -= 10000;
    }
    // 3. 오천원
    if (money >= 5000 && money < 10000) {
      answer[2] += 1;
      money -= 5000;
    }
    // 4. 천원
    if (money >= 1000 && money < 5000) {
      answer[3] += 1;
      money -= 1000;
    }
    // 5. 오백원
    if (money >= 500 && money < 1000) {
      answer[4] += 1;
      money -= 500;
    }
    // 6. 백원
    if (money >= 100 && money < 500) {
      answer[5] += 1;
      money -= 100;
    }
    // 7. 오십원
    if ((money >= 50) & (money < 100)) {
      answer[6] += 1;
      money -= 50;
    }
    // 8. 십원
    if (money >= 10 && money < 50) {
      answer[7] += 1;
      money -= 10;
    }
    // 9. 일원
    if (money >= 1 && money < 10) {
      answer[8] += 1;
      money -= 1;
    }
  }

  return answer;
}

module.exports = problem5;
