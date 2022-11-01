function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var s_money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(let i=0; i < s_money.length; i++){
    if(money < s_money[i]) continue;
    
    s_money[i] = Math.floor(money / s_money[i]);
    money = money % s_money[i];
  }

  return answer;
}
module.exports = problem5;
