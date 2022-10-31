console.log(problem5(50237));

function problem5(money) {
  return withdrawApp(money);
}

function withdrawApp(money){
  const billTypeArr = createBillTypeArr();
  const currBillCount = [];
  for(let i = 0; i < billTypeArr.length; i++){
    [money,currBillCount[i]] = calcWithdraw(money,billTypeArr[i]);
  }
  return currBillCount;
}

function createBillTypeArr(){
  return [50000,10000,5000,1000,500,100,50,10,1];
}

function calcWithdraw(money, billType){
  let billCount = Math.floor(money/billType);
  money %= billType;
  return [money, billCount];
}

module.exports = problem5;
