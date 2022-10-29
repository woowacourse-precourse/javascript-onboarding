function problem5(money) {
  var pay = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var result = [];

  for (let i = 0; i < pay.length; i++) {
    result.push(Math.floor(money / pay[i]));
    money %= pay[i];
  }

  return result;
}

module.exports = problem5;
