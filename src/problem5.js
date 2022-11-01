function problem5(money) {
  var money_category = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = [];
  for(var i=0; i<9; i++){
    var quot = parseInt(parseInt(money)/parseInt(money_category[i])); /* 주어진 돈 단위로 나누어 나오는 몫(quot)이 해당 단위의 개수 */
    if(quot>0){
      money = money%money_category[i]; /* 나머지는 주어진 단위로 나누고 남은 돈 */
      answer.push(quot);
    }
    else answer.push(0);
  }
  return answer;
}

module.exports = problem5;
