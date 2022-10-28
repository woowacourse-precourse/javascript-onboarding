function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];
  var coin = [50000,10000,5000,1000,500,100,50,10,1];
  
  for (var i=0; i<coin.length; i++){
    if (money/coin[i]>=1){
      var temp = Math.floor(money/coin[i]);
      answer[i] += temp;
      money -= coin[i] * temp;
    }
  }
  return answer;
}

module.exports = problem5;
