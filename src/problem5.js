const countMoney = (answer, money) => {
  var moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var i = 0;
  while (money){
    answer[i] += parseInt(money / moneyList[i]);
    money = parseInt(money % moneyList[i]);
    i += 1;
  }
  return answer;
}

function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];
  
  answer = countMoney(answer, money);
  
  return answer;
}

module.exports = problem5;
