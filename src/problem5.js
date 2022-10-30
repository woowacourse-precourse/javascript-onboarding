function problem5(money) {
  let coin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  var result = [];

  for(let i=0; i < coin.length; i++) {
   var oman = money / coin[i];
   result[i] = 0;
   result[0] = oman;
    money %= coin[i];
  }
  return result;
}

module.exports = problem5;
