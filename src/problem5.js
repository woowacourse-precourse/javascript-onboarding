function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let tempMoney = money;
  let result = [];

  for (let idx = 0; idx < currency.length; idx++){
    if (tempMoney < currency[idx]){
      result.push(0);
      continue;
    }
    result.push(parseInt(tempMoney / currency[idx]));
    tempMoney = tempMoney % currency[idx];
  }
  return result;
}

module.exports = problem5;
