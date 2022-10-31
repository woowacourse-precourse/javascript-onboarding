function problem5(money) {
  const monetaryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
  const answer = []
  let change = money
  for(let i of monetaryUnit){
    answer.push(parseInt(change/i))
    change = change%i
  }
  return answer;
}

module.exports = problem5;
