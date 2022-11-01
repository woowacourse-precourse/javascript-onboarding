function problem5(money) {
  var answer;
  const coin=[50000,10000,5000,1000,500,100,50,10,1]
  answer=[0,0,0,0,0,0,0,0,0]

  while(money>0){
    for(var i=0;i<coin.length;i++){
      if(money-coin[i]>=0){
        money=money-coin[i];
        answer[i]++;
        break;
      }
    }
  }
  
  return answer;
}

module.exports = problem5;
