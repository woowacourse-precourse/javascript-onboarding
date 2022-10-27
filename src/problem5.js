const unitsArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function getMoneyNumber(money) {
  let resultArray = [];
  let rest = money;

  unitsArray.map((unit) => {
    let share = parseInt(rest / unit);
    let remainder = rest % unit;
    if (share != 0) {
      resultArray.push(share);
    } else {
      resultArray.push(0);
    }
    rest = remainder;
  });

  return resultArray;
}

module.exports = problem5;
