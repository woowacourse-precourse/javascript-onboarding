function problem5(money) {
  return withdrawApp(money);
}

function withdrawApp(money){
  const billType = [50000,10000,5000,1000,500,100,50,10,1];
  const currBillCount = [];
  for(let i = 0; i < billType.length; i++){
    let [currAccount,billCount] = calcWithdraw(money,billType[i]);
    money = currAccount;
    currBillCount[i] = billCount;
  }
  return currBillCount;
}

function calcWithdraw(money, billType){
  let billCount = Math.floor(money/billType);
  money %= billType;
  return [money, billCount];
}

module.exports = problem5;
