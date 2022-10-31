function problem5(money) {
  var answer = withdrawMoney(money)
  return answer;
}

module.exports = problem5;


function withdrawMoney(money){
  let leftMoney = money;
  let withdrawList = [];
  const CURRENCY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  CURRENCY.forEach(curr => {
    let devidedMoney = parseInt(leftMoney / curr);
    withdrawList.push(devidedMoney)
    leftMoney  = leftMoney % curr
  })
  return withdrawList
}