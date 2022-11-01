function problem5(money) {
  var answer=[];
  if(money !== 0){
    if(money / 50000 !== 0){
      answer.push(money/50000)
      money = money%50000
    }
    if(money/10000 !== 0&&money/10000>=1){
      answer.push(money/10000)
      money = money%10000
    }
    if(money/5000 !== 0&&money/5000>=1){
      answer.push(money/5000)
      money = money%5000
    }
    if(money/1000 !== 0&&money/1000>=1){
      answer.push(money/1000)
      money = money%1000
    }
    if(money/500 !== 0){
      answer.push(money/500)
      money = money%500
    }
    if(money/100 !== 0&&money/100>=1){
      answer.push(money/100)
      money = money%100
    }
    if(money/50 !== 0){
      answer.push(money/50)
      money = money%50
    }
    if(money/10 !==0&&money/10>=1){
      answer.push(money/10)
      money = money%10
    }
    if(money/1 !== 0){
      answer.push(money/1)
      money = money%1
    }
  }
  

  return answer;
}

module.exports = problem5;
