function problem5(money) {
  let moneyList = [50000,10000,5000,1000,500,100,50,10,1];
  let answer = new Array(9).fill(0);

  for (i of moneyList){
    if(money===0){
      break;
    }
    answer[moneyList.indexOf(i)] += parseInt(money/i);
    money %= i;
  }

  return answer;
}

module.exports = problem5;