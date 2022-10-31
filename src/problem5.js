function problem5(money) {
  var answer;
  const moneyList = [];
  // 해당 자리수로 나눈 몫, 그리고 나머지를 구함
  money / 50000 ? moneyList.push(Math.floor(money / 50000)) : moneyList.push(0);
  money = money % 50000;
  money / 10000 ? moneyList.push(Math.floor(money / 10000)) : moneyList.push(0);
  money = money % 10000;
  money / 5000 ? moneyList.push(Math.floor(money / 5000)) : moneyList.push(0);
  money = money % 5000;
  money / 1000 ? moneyList.push(Math.floor(money / 1000)) : moneyList.push(0);
  money = money % 1000;
  money / 500 ? moneyList.push(Math.floor(money / 500)) : moneyList.push(0);
  money = money % 500;
  money / 100 ? moneyList.push(Math.floor(money / 100)) : moneyList.push(0);
  money = money % 100;
  money / 50 ? moneyList.push(Math.floor(money / 50)) : moneyList.push(0);
  money = money % 50;
  money / 10 ? moneyList.push(Math.floor(money / 10)) : moneyList.push(0);
  money = money % 10;
  moneyList.push(money);
  answer = moneyList;
  return answer;
}

module.exports = problem5;
