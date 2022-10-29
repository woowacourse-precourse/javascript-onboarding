function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  // 화폐단위 변수 currency
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < currency.length; i++) {
    // money를 각 화폐단위로 나눈 몫을 answer의 해당 화폐단위 index에 할당
    answer[i] = Math.floor(money / currency[i]);
    // money를 해당 화폐단위로 나눈 나머지로 할당
    money %= currency[i];
  }
  return answer;
}
module.exports = problem5;
