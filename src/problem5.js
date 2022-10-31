function problem5(money) {
  var answer;
  return answer;
}

function getCoinNumber(money, coin) {
  let result = {
    curMoney: money,
    counter: 0,
  };
  result.curMoney = Math.trunc(money % coin);
  result.counter = Math.trunc(money / coin);
  return result;
}

module.exports = problem5;
