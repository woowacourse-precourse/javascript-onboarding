function transformMoney(money){
  let money_unit = [50000,10000,5000,1000,500,100,50,10,1];
  let trans_money=[];
  for(let i=0;i<money_unit.length;i++){
      trans_money[i]=parseInt((money/money_unit[i]));
      money%=money_unit[i];
  }return trans_money;
}
function problem5(money) {
  let answer;
  answer=transformMoney(money);
  return answer;
}
module.exports = problem5;