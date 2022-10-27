function problem5(money) {
  var answer = [9];
  var money_Price = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for(var i=0; i<money_Price.length; i++){
    if(i == 0){
      answer[i] = parseInt(money/money_Price[i]);
    }
    else{
      answer[i] = parseInt((money%money_Price[i-1]) / money_Price[i]);
    }
  } 
  return answer;
  
}

module.exports = problem5;
