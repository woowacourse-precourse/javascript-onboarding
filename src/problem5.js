function problem5(money) {

  // 금액을 담은 배열
  const payMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let answer = [];

  for (let i = 0; i < payMoney.length; i++){
    answer.push(parseInt(money / payMoney[i]));
    money %= payMoney[i];
  };
  
  return answer;
}

module.exports = problem5;
