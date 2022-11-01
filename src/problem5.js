function problem5(money) {
  var answer;

  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let money_arr = [];

  // 각 단위별로 배열 생성
  // 배열 순서대로 높은순으로 나눠서 값에 넣음
  function moneySort(money) {
    for (let i=0; i<moneyUnit.length; i++) {
      money_arr.push(Math.floor(money / moneyUnit[i]));
      money = money % moneyUnit[i];
    }
    return money_arr;
  }

  const result = moneySort(money);

  answer = result;
  return answer;
}

module.exports = problem5;
