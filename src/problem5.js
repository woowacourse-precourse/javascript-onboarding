function problem5(money) {
  let answer = [];
  let div= 5;
  let digit = 50000;

  for (let i = 0; i<8; i++){
    answer.push(parseInt(money/digit))
    money = money%digit //나머지
    digit = digit/div  // 몫
    div==2?div=5:div==5?div=2:null

  }
  answer.push(money)
  return answer;
}

module.exports = problem5;
