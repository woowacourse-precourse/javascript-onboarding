function problem5(money) {
  var answer = [];
  let money_type = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  while(money != 0){
    for(let type of money_type){
      let cnt = Math.floor(money / type);
      if (cnt){
        answer.push(cnt);
        money -= type * cnt;
      }else{
        answer.push(0)
      }
    }
  }
  return answer;
}

module.exports = problem5;
