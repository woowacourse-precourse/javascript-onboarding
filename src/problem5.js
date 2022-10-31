function problem5(money) {
  var answer;

  function mapping() {
    return new Map([
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
  }

  function convert(priceMap, money) {
    var resultArray;
    priceMap.forEach((_, key) => {
      var quotient = parseInt(money / key);
      if (quotient >= 1) {
        priceMap.set(key, quotient);
        money -= key * quotient;
      }
    });
    resultArray = Array.from(priceMap.values());
    return resultArray;
  }

  var priceMap = mapping();
  answer = convert(priceMap, money);

  return answer;
}

module.exports = problem5;
