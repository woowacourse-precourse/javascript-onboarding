// 1. 금액이 높은 순서대로 개수 변환
// 2. 문자열 자리수에 따라 5를 기준으로 넘어가면 해당 금액의 화폐의 개수가 올라가고, 넘어가지 않으면 작은 금액의 화폐 개수가 올라가도록 함
// 3. 자리수가 그대로 개수로 들어갈 때는 다시 숫자형으로 바꿔줌.
// 4. 금액이 높은 순서대로 반환하는 result 배열에 추가

function problem5(money) {
  const result = [];

  const won_50000 = Math.floor(money / 50000);
  const won_10000 = Math.floor((money % 50000) / 10000);
  const won_5000 = money.toString()[1] >= 5 ? 1 : 0;
  const won_1000 = money.toString()[1] < 5 ? parseInt(money.toString()[1]) : 0;
  const won_500 = money.toString()[2] >= 5 ? 1 : 0;
  const won_100 = money.toString()[2] < 5 ? parseInt(money.toString()[2]) : 0;
  const won_50 = money.toString()[3] >= 5 ? 1 : 0;
  const won_10 = money.toString()[3] < 5 ? parseInt(money.toString()[3]) : 0;
  const won_5 = money.toString()[4] >= 5 ? 1 : 0;
  const won_1 = parseInt(money.toString()[4]);

  result.push(
    won_50000,
    won_10000,
    won_5000,
    won_1000,
    won_500,
    won_100,
    won_50,
    won_10,
    won_1
  );
  return result;
}

module.exports = problem5;
