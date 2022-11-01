function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];
  var bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (var i = 0; i < 9; i++){
    if (money >= bills[i]){
      answer[i] += parseInt(money / bills[i]);
      money -= parseInt(money / bills[i]) * bills[i];
    }
  }
  return answer;
}

module.exports = problem5;
