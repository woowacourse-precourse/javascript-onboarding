function problem5(money) {
  var answer;
  return answer;
}

function withdraw(money) {
  const billsType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const billsNumber = [];
  for (let i = 0; i < billsType.length; i++) {
    billsNumber.push(parseInt(money / billsType[i], 10));
    money %= billsType[i];
  }
  return billsNumber;
}

module.exports = problem5;
