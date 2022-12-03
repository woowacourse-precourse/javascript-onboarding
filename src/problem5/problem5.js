function problem5(money) {
  var answer;
  let coins = 0;
  function calculate(pre, current) {
    coins = Math.floor((money % pre) / current);
    return coins;
  }
  const change_money = {
    ohmanwon: Math.floor(money / 50000),
    manwon: calculate(50000, 10000),
    ohcheonwon: calculate(10000, 5000),
    cheonwon: calculate(5000, 1000),
    obegwon: calculate(1000, 500),
    begwon: calculate(500, 100),
    oshipwon: calculate(100, 50),
    shipwon: calculate(50, 10),
    illwon: calculate(10, 1),
  };
  const money_arr = [
    change_money.ohmanwon,
    change_money.manwon,
    change_money.ohcheonwon,
    change_money.cheonwon,
    change_money.obegwon,
    change_money.begwon,
    change_money.oshipwon,
    change_money.shipwon,
    change_money.illwon,
  ];
  answer = money_arr;
  return answer;
}

module.exports = problem5;
