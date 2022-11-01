function problem5(money) {
  var answer;
  let moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [];

  for(let i = 0; i < moneyList.length; i++) {
    let quotient = Math.floor(money/moneyList[i]);
    result.push(quotient);
    money -= (quotient * moneyList[i]);
  }
  answer = result;

  return answer;
}

module.exports = problem5;

// 1. 금액 단위 리스트 만들기
// 2. for 문을 돌며 금액을 단위로 나누어 몫을 리스트에 저장 후 전체 금액에서 빼줌 
