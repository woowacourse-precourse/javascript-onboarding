function problem5(money) {
  var answer = solution(money);
  return answer;
}

function solution(money){
  const monArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let tmpMoney = money;
  while(tmpMoney > 50000){
    tmpMoney -= 50000;
    monArr[0] += 1;
  }
  while(tmpMoney >= 10000){
    tmpMoney -= 10000;
    monArr[1] += 1;
  }
  while(tmpMoney >= 5000){
    tmpMoney -= 5000;
    monArr[2] += 1;
  }
  while(tmpMoney >= 1000){
    tmpMoney -= 1000;
    monArr[3] += 1;
  }
  while(tmpMoney >= 500){
    tmpMoney -= 500;
    monArr[4] += 1;
  }
  while(tmpMoney >= 100){
    tmpMoney -= 100;
    monArr[5] += 1;
  }
  while(tmpMoney >= 50){
    tmpMoney -= 50;
    monArr[6] += 1;
  }
  while(tmpMoney >= 10){
    tmpMoney -= 10;
    monArr[7] += 1;
  }
  monArr[8] = tmpMoney;

  return monArr;
}

module.exports = problem5;
