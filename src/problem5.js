function problem5(money) {
  const bankArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let moneyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  bankArray.forEach((bankMoney, index) => {
    moneyCount[index] = parseInt(money / bankArray[index]);
    money = money % bankArray[index];
  });
  return moneyCount;
}

console.log(problem5(15000));
module.exports = problem5;
