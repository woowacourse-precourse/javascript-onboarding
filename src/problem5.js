function problem5(money) {
  // 화폐를 상수로 선언
  const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 반환할 배열 생성
  let answer = [];

  MONEY.forEach((price, index) => {
    answer.push(Math.floor(money / price));
    money -= price * answer[index];
  })

  return answer;
}

module.exports = problem5;
