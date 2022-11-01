function problem5(money) {
  var answer = [];
  var won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (var i = 0; i < won.length; i++) {
    if (Math.floor(money / Number(won[i])) !== 0) {
      answer.push(Math.floor(money / Number(won[i])));
      money = money % Number(won[i]);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

module.exports = problem5;
console.log(problem5(50237));
