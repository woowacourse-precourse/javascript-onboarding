function problem5(money) {
    const moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < moneys.length; i++) {
      while (money >= moneys[i]) {
        answer[i] = parseInt(money / moneys[i]);
        money = parseInt(money % moneys[i]);
      }
    }
    return answer;
}

module.exports = problem5;
