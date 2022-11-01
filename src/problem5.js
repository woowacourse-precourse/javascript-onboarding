function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const money_type = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for (let i = 0; i < money_type.length; i++){
      answer[i] = Math.floor(answer[i] + money / money_type[i]);
      money = money % money_type[i];
  }
  return answer;
}


module.exports = problem5;