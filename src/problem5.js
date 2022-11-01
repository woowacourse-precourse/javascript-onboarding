function problem5(money) {
  var answer=[]
  let type = [50000,10000,5000,1000,500,100,50,10,1]
  let new_money = money

  for(let i = 0 ; i < 10; i++){
      if(new_money >= type[i]){
          answer.push (Math.floor(new_money/type[i]))
      }
      else if(new_money < type[i]){
          answer.push (0)
      }
      new_money = new_money - type[i]*answer[i]

  }

  return answer;
}

module.exports = problem5;
