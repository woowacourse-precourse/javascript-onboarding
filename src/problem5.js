function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyCarryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(let i=0; i<answer.length; i++) {
    [answer[i], money] = getCalculateMoney(money, moneyCarryUnit[i]);
  }

  return answer;
}

// 현재 금액과 검사할 금액 
function getCalculateMoney(restMoney, unitMoney) {
  let unitNum = 0;
  if(restMoney >= unitMoney) {
    unitNum = parseInt(restMoney / unitMoney);
    restMoney -= (unitMoney * unitNum)
  }
  return [unitNum, restMoney];
}

module.exports = problem5;

