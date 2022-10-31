function problem5(money) {
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const changeMoneyArr = [];

  for(let i=0; i<moneyArr.length; i++) {
    let own = Math.floor(money/moneyArr[i]);
    money = money%=moneyArr[i];
    changeMoneyArr.push(own);
  }
  return changeMoneyArr;
}

module.exports = problem5;
