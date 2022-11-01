function problem5(money) {
  if (money < 1 || money > 1000000 || !(Number.isInteger(money))) {
    return -1;
  }
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let rest = (money, divided) => Math.floor(money / divided);
  let curMoney = money;

  for (let i = 0; i < answer.length; i++) {
    if (i === 8){
      answer[i] = curMoney;
      continue;
    }
    else if(!(i % 2)) {
      answer[i] = rest(curMoney, 50000 / Math.pow(10, i/2));
      curMoney = curMoney % (50000 / Math.pow(10, i/2));
      continue;
    }
    answer[i] = rest(curMoney, 10000 / Math.pow(10, (i - 1)/2));
    curMoney = curMoney % (10000 / Math.pow(10, (i - 1)/2));
  }

  return answer;
}

module.exports = problem5;