function problem5(money) {
  // 화폐 금액 배열 및 각 화폐의 수 배열 선언
  let moneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  // 주어진 매개변수에 따라 각 화폐의 수를 산정하는 for 문 작성
  for (let i = 0; i < answer.length; i++) {
    if (money) {
      answer[i] = parseInt(money / moneyArray[i]);
      money = money % moneyArray[i];
    }
  }

  // 결과값 산출
  return answer;
}

module.exports = problem5;
