function problem5(money) {
  var answer;
  return answer;
}
function intoArr (money){
  let moneyArr = [];
  const resultArr = [];
  let remains = [];

  moneyArr.push(money);

  function switches(n){
    remains.push((moneyArr[0] - n*(parseInt(moneyArr[0]/n))));
    resultArr.push(Math.floor(moneyArr[0]/n));
    moneyArr = [];
    moneyArr.push(remains[0])
    remains = [];
  }
  const fiftyThousand = new switches(50000);
  const tenThousand = new switches(10000);
  const fiveThousand = new switches(5000);
  const thousand = new switches(1000);
  const fiveHundred = new switches(500);
  const hundred = new switches(100);
  const fifty = new switches(50);
  const ten = new switches(10);
  const one = new switches(1);
  return resultArr;
}

module.exports = problem5;
