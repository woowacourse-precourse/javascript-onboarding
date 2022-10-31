function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 가장 큰 화폐 개수부터 구하기
  for (let i = 0; i < moneyType.length; i++) {
    answer[i] = parseInt(money / moneyType[i]);
    money = money % moneyType[i];
  }

  return answer;
}
module.exports = problem5;
