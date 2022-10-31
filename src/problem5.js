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
  }
}

module.exports = problem5;
