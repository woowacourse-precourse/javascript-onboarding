function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  var unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var temp = money;
  for(var i = 0; i < 9; i++){
    answer[i] = parseInt(temp / unit[i]);
    temp = temp % unit[i];
    if(temp === 0) break;
  }
  return answer;
}

module.exports = problem5;
