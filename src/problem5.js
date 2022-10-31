function problem5(money) {
  const moneytList = [50000,10000,5000,1000,500,100,50,10,1]
  const answer = [0,0,0,0,0,0,0,0,0];
  for(let i = 0; i < 9; i++) {
     answer[i] = parseInt(money / moneytList[i]);
     money = money % moneytList[i];
  }
  return answer;
}
problem5(15000);
module.exports = problem5;
