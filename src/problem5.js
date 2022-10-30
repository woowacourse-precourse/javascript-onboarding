function problem5(money) {
  let answer=[0,0,0,0,0,0,0,0,0];
  let cash=[50000,10000,5000,1000,500,100,50,10,1]
  for(let i=0;i<cash.length;i++){
    answer[i]=parseInt(money/cash[i])
    money=money%cash[i]
  }
  return answer;
}
module.exports = problem5;
