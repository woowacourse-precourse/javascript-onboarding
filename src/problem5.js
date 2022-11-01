function problem5(money) {
  var answer;
  let unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10];

  for (let i = 0; i < unit.length; i++) {
    let moneyTemp = money % unit[i];
    console.log(moneyTemp);
  }
  return answer;
}

module.exports = problem5;
