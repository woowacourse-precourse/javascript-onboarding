function problem5(money) {
  if (money <= 0) return 0;

  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let countList = [];

  moneyList.map((value) => {
    countList.push(parseInt(money / value));
    money %= value;
  });
  return countList;
}

module.exports = problem5;
