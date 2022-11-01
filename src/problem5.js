function exchange(num){
  const wallet = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const ans = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for(i = 0; i < 9; i++) {
    if(num - wallet[i] >= 0){
      ans[i] = parseInt(num / wallet[i]);
      num %= wallet[i];
    }
  }
  return ans;
}

function problem5(money) {
  return exchange(money);
}

module.exports = problem5;
