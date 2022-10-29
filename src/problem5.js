function problem5(money) {
  var answer = [,,,,,,,,];
  var paper = [50000, 10000, 5000, 1000, 500, 100, 50, 10 ,1];
  var count;

  for(var i = 0; i < 9; i++) {
    if(money >= paper[i]) {
      answer[i] = Math.floor(money / paper[i]);
      money -= (answer[i] * paper[i]); // money = money - answer[i] * paper[i];
    }
    else answer[i] = 0;
  }
  return answer;
}

module.exports = problem5;
