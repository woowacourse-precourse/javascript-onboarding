function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  moneyList.forEach((nowMoney, idx) => {
    if (money >= nowMoney) {
      answer[idx] = parseInt(money / nowMoney);
      money = money - nowMoney * answer[idx];
    }
  });

  return answer;
}

module.exports = problem5;

// 기능구현
// 1. [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1] 배열 생성
// 2. 배열을 돌며 각 원소와 잔액의 크기 비교 후 잔액이 더 큰 경우 몫을 저장
// 3. 잔액 = 원금 - nowMoney * 몫
