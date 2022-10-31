function transformMoney(n){
  let money_unit = [50000,10000,5000,1000,500,100,50,10,1];
  let result=[];

  for(let i=0;i<money_unit.length;i++){
      result[i]=parseInt((n/money_unit[i]));
  }
  return result;
}
function problem5(money) {
  let answer;
  answer=transformMoney(money);
  return answer;

}
module.exports = problem5;