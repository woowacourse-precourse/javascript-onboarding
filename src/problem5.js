/*function problem5(돈) {
  fiveMillion = parseInt(money/50000)
  million = parseInt((money%50000)/10000)
  fiveThousand = parseInt(((money%50000)%10000)/5000)
  thousand = parseInt((((money%50000)%10000)%5000)/1000)
  fiveHundred = parseInt(((((money%50000)%10000)%5000)%1000)/500)
  hundred = parseInt((((((money%50000)%10000)%5000)%1000)%500)/100)
  fifty = parseInt(((((((money%50000)%10000)%5000)%1000)%500)%100)/50)
  ten = parseInt((((((((money%50000)%10000)%5000)%1000)%500)%100)%50)/10)
  one = (((((((money%50000)%10000)%5000)%1000)%500)%100)%50)%10
  return [fiveMillion,million,fiveThousand,thousand,fiveHundred,hundred,fifty,ten,one]
}
module.exports = problem5;
*/
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
