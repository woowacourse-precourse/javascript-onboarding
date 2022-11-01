function problem5(money) {
  
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(var i = 0; i < 9; i++){
    answer[i] = Math.floor(money / bills[i]);
    money -= Math.floor(money / bills[i]) * bills[i];
  }
  
  return answer;
}

console.log(problem5(15000));
module.exports = problem5;
