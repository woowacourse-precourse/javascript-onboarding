function problem5(money) {
  var answer = [];

  if(parseInt(money / 50000) > 0){
    answer.push(parseInt(money / 50000))
    money %= 50000
  }
  else{
    answer.push(0)
  }
  if(parseInt(money / 10000) > 0){
    answer.push(parseInt(money / 10000))
    money %= 10000
  }
  else{
    answer.push(0)
  }
  if(parseInt(money / 5000) > 0){
    answer.push(parseInt(money / 5000))
    money %= 5000
  }
  else{
    answer.push(0)
  }
  if(parseInt(money / 1000) > 0){
    answer.push(parseInt(money / 1000))
    money %= 1000
  }
  else{
    answer.push(0)
  }
  if(parseInt(money / 500) > 0){
    answer.push(parseInt(money / 500))
    money %= 500
  }
  else{
    answer.push(0)
  }
  if(parseInt(money / 100) > 0){
    answer.push(parseInt(money / 100))
    money %= 100
  }
  else{
    answer.push(0)
  }
  if(parseInt(money / 50) > 0){
    answer.push(parseInt(money / 50))
    money %= 50
  }
  else{
    answer.push(0)
  }
  if(parseInt(money / 10) > 0){
    answer.push(parseInt(money / 10))
    money %= 10
  }
  else{
    answer.push(0)
  }
  answer.push(money/1)
  return answer;
}

module.exports = problem5;
