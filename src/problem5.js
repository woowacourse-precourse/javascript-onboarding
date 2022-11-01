function problem5(money) {
  let answer = [];
  money_arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for(let i=0; i<money_arr.length; i++){
    cnt = parseInt(money/money_arr[i]);
    answer.push(cnt);
    if(cnt !== 0) money -= money_arr[i]*cnt;
  }
  return answer;
}

module.exports = problem5;
