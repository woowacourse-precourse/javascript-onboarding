function problem5(money) {
  let moneyUnitArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let newArr = [];
  for (let i = 0; i < moneyUnitArray.length; i++) {
    newArr.push(parseInt(money / moneyUnitArray[i]));
    money -= moneyUnitArray[i] * parseInt(money / moneyUnitArray[i]);
  }

  return newArr;
}

module.exports = problem5;
