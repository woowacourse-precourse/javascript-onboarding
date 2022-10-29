function getCount(money){
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const countArr = [];

  for(let i = 0 ; i<moneyType.length ; i++){
    countArr.push(parseInt(money / moneyType[i]));
    money %= moneyType[i];
  }

  return countArr;
}

function problem5(money) {
  return getCount(money);
}

module.exports = problem5;
