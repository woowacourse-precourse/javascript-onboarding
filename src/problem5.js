function problem5(money) {
  const amount = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  let answer = []
  
  for(let i = 0 ; i<amount.length; i++){
    answer.push(Math.floor(money/amount[i]))
    
    money -= amount[i] * answer[answer.length-1]
  }
  
  return answer;

}

module.exports = problem5;
