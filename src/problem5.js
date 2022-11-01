function problem5(money) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  while(money > 1) {
    if(money >= 50000) {
      money = convertAmount(money, 50000, 0);
    } else if(10000 <= money && money < 50000) {
      money = convertAmount(money, 10000, 1);
    } else if(5000 <= money && money < 10000) {
      money = convertAmount(money, 5000, 2);
    } else if(1000 <= money && money < 5000) {
      money = convertAmount(money, 1000, 3);
    } else if(500 <= money && money < 1000) {
      money = convertAmount(money, 500, 4);
    } else if(100 <= money && money < 500) {
      money = convertAmount(money, 100, 5);
    } else if(50 <= money && money < 100) {
      money = convertAmount(money, 50, 6);
    } else if(10 <= money && money < 50) {
      money = convertAmount(money, 10, 7);
    } else if(money < 10) {
      money = convertAmount(money, 1, 8);
    }
  }

  function convertAmount(money, amount, idx) {
    const count = Math.floor(money / amount);
    result[idx] = count;
    money = money - amount * count;
    return money;
  }

  return result;
}
module.exports = problem5;
