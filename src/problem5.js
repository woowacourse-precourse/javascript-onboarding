function problem5(money) {
  var answer;
  const monetaryUnit = [50000,10000,5000,1000,500,100,50,10,1]
  for (let i=0;i<monetaryUnit.length; i++){
    let moneycount = 0
    moneycount = parseInt(money/monetaryUnit[i])
    money -= moneycount * monetaryUnit[i]
  }
  return answer;
}
module.exports = problem5;
