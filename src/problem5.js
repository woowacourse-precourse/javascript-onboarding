function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];
  var unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for(var i = 0; i < 9; i++){
    answer[i] = parseInt(money / unit[i]);
    money = money % unit[i];
  }
  return answer;
}

module.exports = problem5;
