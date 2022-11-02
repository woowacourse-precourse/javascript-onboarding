function problem5(money) {
  currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  currencyNew = [];
  currency.forEach(function (item) {
    currencyNew.push(parseInt(money / item));
    money = money % item;
  });
  console.log(currencyNew);
  return currencyNew;
}
module.exports = problem5;
