function problem5(money) {
  const moneyUnit = [50000,10000,5000,1000,500,100,50,10,1];
  var answer = [];

  moneyUnit.reduce((prev,next)=>{
    if(prev / next >= 1){
      answer.push(Math.floor(prev / next));
    }else{
      answer.push(0);
    }
    return prev % next;
  },money)
  
  return answer;
}

module.exports = problem5;
