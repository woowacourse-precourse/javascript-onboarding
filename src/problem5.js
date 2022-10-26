function problem5(money) {
  //오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
  const digitArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for (const i of digitArr) {
    answer.push(digitMoney(money, i));
    money %= i;
  }

  return answer;
}

// 자리당 몫을 계산하는 함수
const digitMoney = (money, digit) => {
  return Math.floor(money / digit);
};

module.exports = problem5;
