function problem5(money) {

  const bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [];

  for (let i of bill) {
    let str = parseInt(money / i);
    result.push(str);
    money = money % i;
  }

  return result;

}

module.exports = problem5;
