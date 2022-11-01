function problem5(money) {
  let answer = new Array(9).fill(0);
  let coin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for(let i=0;i<coin.length;i++){
    if(money === 0) break;
    answer[i] += Math.floor(money/coin[i]);
    money -= answer[i]*coin[i];
  }
  return answer;
}

module.exports = problem5;
