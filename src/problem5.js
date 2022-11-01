function problem5(money) {
  var money_category = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = [];
  for(var i=0; i<9; i++){
    var quot = parseInt(parseInt(money)/parseInt(money_category[i]));
    if(quot>0){
      money = money%money_category[i];
      answer.push(quot);
    }
    else answer.push(0);
  }
  return answer;
}

module.exports = problem5;
