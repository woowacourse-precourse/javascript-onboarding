function problem5(money) {
  let paperMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let changeMoney = [];
  for(let i = 0; i < paperMoney.length; i++){
    if(money - paperMoney[i] >= 0){
      changeMoney.push(Math.floor(money/paperMoney[i]));
      money %= paperMoney[i];
      continue;
    }
    if(money - paperMoney[i] < 0){
      changeMoney.push(0);
      continue;
    }
    if(money == 0){
      return; 
    }
  }
  return changeMoney;
}
module.exports = problem5;

