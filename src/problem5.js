function problem5(money) {
  var answer = [];
  let moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  while(money != 0) {
    for(let unit of moneyUnit) {
        let num = Math.floor(money / unit);
        if(num != 0) {
          answer.push(num);
          money -= unit * num;
        } else answer.push(0);
    }
  }
  return answer;
}

module.exports = problem5;
