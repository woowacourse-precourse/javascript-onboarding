function problem5(money) {
  let moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let moneyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for(i = 0; i < moneyType.length; i++){
    moneyCount[i] = parseInt(money/moneyType[i]);
    money %= moneyType[i];
  }

  return moneyCount;

}

module.exports = problem5;
