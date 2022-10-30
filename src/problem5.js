function problem5(money) {
  let result = [];
  let bill = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < bill.length; i++) {
    result.push(Math.floor(money / bill[i]));
  } 

  return result;
}

module.exports = problem5;
