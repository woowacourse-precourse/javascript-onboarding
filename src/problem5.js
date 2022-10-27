function problem5(money) {
  var answer = [];
  let monetary_unit = 100000;
  for(let i = 0;i<8;i++){
    if(i % 2 == 0) monetary_unit = monetary_unit / 2;
    if(i % 2 == 1) monetary_unit = monetary_unit / 5;
    answer.push(parseInt(money / monetary_unit))
    money = money % monetary_unit
  }
  answer.push(parseInt(money / 1))
  return answer;
}
module.exports = problem5;
