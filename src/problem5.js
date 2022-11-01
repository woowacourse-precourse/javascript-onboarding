//오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
function problem5(money) {
  var answer = Array(moneyUnits.length).fill(0);
  for(let i = 0; i < moneyUnits.length; i++){
    answer[i] = Math.floor(money / moneyUnits[i]);
    money = money - answer[i] * moneyUnits[i];
  }
  return answer;
}

module.exports = problem5;
