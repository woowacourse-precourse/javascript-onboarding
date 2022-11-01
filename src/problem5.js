function problem5(money) {
  var answer;
  let wallet = new Array();
  wallet.push(parseInt(money / 50000));
  wallet.push(parseInt(money % 50000 / 10000));
  wallet.push(parseInt(money % 50000 % 10000 / 5000));
  wallet.push(parseInt(money % 50000 % 10000 % 5000 / 1000));
  wallet.push(parseInt(money % 50000 % 10000 % 5000 % 1000 / 500));
  wallet.push(parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 / 100));
  wallet.push(parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 % 100 / 50));
  wallet.push(parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 % 100 % 50 / 10));
  wallet.push(parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 % 100 % 50 % 10 / 1));
  answer = wallet;
  return answer;
}

module.exports = problem5;