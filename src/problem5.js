function problem5(money) {
  var answer;
  var mapper = new Map([
    [50000, 0],
    [10000, 0],
    [5000, 0],
    [1000, 0],
    [500, 0],
    [100, 0],
    [50, 0],
    [10, 0],
    [1, 0],
  ]);

  mapper.forEach((_, key) => {
    var quotient = parseInt(money / key);
    if (quotient > 0) {
      mapper.set(key, quotient);
      money = money - key * quotient;
    }
  });

  answer = Array.from(mapper.values());
  return answer;
}

module.exports = problem5;
