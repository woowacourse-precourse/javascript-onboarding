function problem5(money) {
  var bill=[50000,10000,5000,1000,500,100,50,10,1];
  var answer= new Array();
  for(var i=0; i<9; i++){
    answer[i]=Math.floor(money/bill[i]);
    money = money-answer[i]*bill[i];
  }
  return answer;
}

module.exports = problem5;
