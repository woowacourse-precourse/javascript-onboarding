function problem5(money) {

  var pay = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer=[];
  
  for (let i = 0; i < pay.length; i++){
    answer.push(Math.floor(money / pay[i]));
    money %= pay[i];
  }

  return answer;
}

module.exports = problem5;
