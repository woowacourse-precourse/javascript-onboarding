const ChangeFeeList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer;
  return (answer = calculateFee(money));
}

const calculateFee = (money) => {
  let changeFee = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  ChangeFeeList.map((e, idx) => {
    if (money >= e) {
      change = parseInt(money / e);
      changeFee[idx] = change;
      money = money % e;
    }
  });
  return changeFee;
};

module.exports = problem5;
