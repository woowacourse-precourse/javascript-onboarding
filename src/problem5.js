function problem5(money) {
  const moneyTypeList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let arr = [];
  let count = 0;
  
  for (let coin in moneyTypeList) {
    coin = parseInt(coin)
    arr[coin] = parseInt(money / moneyTypeList[coin]);
    moneyTypeList[coin]
    count += parseInt(money / moneyTypeList[coin]);
    money %= moneyTypeList[coin]
  }
  
  let answer = arr
  return answer;
}

module.exports = problem5;

console.log(problem5(50237));