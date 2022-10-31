function problem5(money) {
  const bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let change = [];

  for(let i = 0; i < bill.length; i++){
    change.push(Math.floor(money / bill[i]));
    money = money % bill[i];
  }
  return change;
}

module.exports = problem5;
