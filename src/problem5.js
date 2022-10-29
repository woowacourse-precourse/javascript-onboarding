const FIFTY_THOUS = 50000;
const TEN_THOUS = 10000;
const FIVE_THOUS = 5000;
const ONE_THOUS = 1000;
const FIVE_HUND = 500;
const ONE_HUND = 100;
const FIFTY = 50;
const TEN = 10;
const ONE = 1;

function problem5(money) {
  var answer = [];
  const currency = [
    FIFTY_THOUS,
    TEN_THOUS,
    FIVE_THOUS,
    ONE_THOUS,
    FIVE_HUND,
    ONE_HUND,
    FIFTY,
    TEN,
    ONE,
  ];
  currency.map((curr, i) => {
    let count = 0;
    while (money >= curr) {
      money = money - curr;
      count++;
    }
    answer.push(count);
  });
  return answer;
}

module.exports = problem5;
