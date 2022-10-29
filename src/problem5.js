function problem5(money) {
  var answer = Array.from({length:9},()=>0);
  let x= 5,
    digit = 50000,
    idx = 0;

  while (idx < 8){
    answer[idx]=parseInt(money/digit)
    money = money%digit
    digit = digit/x
    x==2?x=5:x==5?x=2:null
    idx++
  }
  answer[8]=money

  return answer;

}

module.exports = problem5;
