function problem5(money) {
  var answer = [];
  let unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  return answer;
}

// 돈을 각 단위로 나누어 몫과 나머지 구함 
function calculationMoney(money, unit) {
  let quotient = parseInt(money / unit);
  money = money % unit;
  return { money, quotient };
}

module.exports = problem5;
