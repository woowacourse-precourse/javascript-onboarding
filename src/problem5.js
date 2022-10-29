function problem5(money) {

}

function calUnits(money) {
  const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  let totalLeft = money;

  moneyUnits.forEach(unit => {
    const share = Math.floor(totalLeft / unit);
    answer.push(share);
    totalLeft -= share * unit;
  })

  console.log(answer);
}

calUnits(15000);


module.exports = problem5;
