function problem5(money) {
  var answer;
  answer = [];

  var won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var i = 0;
  while(i < won.length){
    answer[i] = Math.floor(money/won[i]);
    money %= won[i];
    i++;
  }
  return answer;
}
module.exports = problem5;
