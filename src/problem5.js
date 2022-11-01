function problem5(money) {
  var answer = [];
  var m = money;
  var x = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (var i = 0; i <= x.length -1; i++) {
    if (Math.floor(m / Number(x[i])) !== 0) {
      answer.push(Math.floor(m / Number(x[i])));
      m = m % Number(x[i]);
    }else {
      answer.push(0);
    }
  }
  console.log(answer);
  return answer;
}

module.exports = problem5;
