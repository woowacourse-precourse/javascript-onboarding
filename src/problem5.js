function problem5(money) {
  let answer = [];
  // 화폐
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for(let i = 0; i < moneyArr.length; i++) {
    // 나누어준 몫을 저장.
    answer[i] = Math.floor(money / moneyArr[i]);
    // 나머지를 다시 money에 저장.
    money = (money % moneyArr[i]);
  }
  return answer;
}

module.exports = problem5;
