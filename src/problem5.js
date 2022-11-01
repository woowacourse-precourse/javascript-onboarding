function coin(won) {
  this.won = parseInt(won);
}

function possible_coin(divide, coin) {
  let result = parseInt(coin.won / divide);
  coin.won = parseInt(coin.won % divide);
  return result;
}

function problem5(money) {
  var answer = 0;
  let Coin = new coin(money);
  let taget_ = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer_list = [];
  for (let i = 0; i < taget_.length; i++) {
    answer_list.push(possible_coin(taget_[i], Coin));
  }

  return answer_list;
}

module.exports = problem5;
