function problem5(money) {
  var answer;
  let price = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let number = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i=0; i<price.length; i++){
    if(parseInt(money/price[i])){
      number[i] = parseInt(money/price[i]);
      money -= price[i]*number[i];
    }
  }
  answer = number;
  return answer;
}

module.exports = problem5;
