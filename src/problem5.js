function problem5(money) {

  const cash = [50000,10000,5000,1000,500,100,50,10,1];
  let answer = [];
  let i = 0;
  
  for(i; i < cash.length; i++){
    answer.push(Math.floor(money / cash[i]));
    money %= cash[i];
  }

  return answer;
}

module.exports = problem5;
