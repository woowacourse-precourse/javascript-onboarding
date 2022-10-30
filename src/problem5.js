function getMoneyNumArr(money){
  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const MoneyNumArr = moneyList.map((changeMoney) => {
    const moneyNum = parseInt(money/changeMoney);
    money = money % changeMoney;

    return moneyNum;
  })
   
  return MoneyNumArr;
}

function problem5(money) {
  const answer = getMoneyNumArr(money);
  
  return answer;
}

module.exports = problem5;
