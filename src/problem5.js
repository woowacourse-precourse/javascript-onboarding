function problem5(money) {
  var answer;
  var moneyCoin=[50000,10000,5000,1000,500,100,50,10,1];
  answer = [];
  while(money>0){
    for(i=0;i<moneyCoin.length;i++){
      answer.push(parseInt(money/moneyCoin[i]));
      money%=moneyCoin[i];
    }
  }
  return answer;
}


module.exports = problem5;
