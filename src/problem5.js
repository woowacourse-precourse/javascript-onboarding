function isValid(money) {
  const regex = /^[1-9][0-9]*$/;

  if (money < 1 || money > 1000000 || !regex.test(money)) {
    throw "1 이상 1,000,000 이하로 입력해주세요";
  }
}

function problem5(money) {
  let answer = [];
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  isValid(money);
  moneyArr.map((currency) => {
    let numberOfCurrency = 0;

    if (money > 0) {
      numberOfCurrency = Math.floor(money / currency);
      money %= currency;
    }

    answer.push(numberOfCurrency);
  });
  return answer;
}

module.exports = problem5;
