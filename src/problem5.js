function problem5(money) {
  let answer = [];
  let money_kinds = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let money_kind_cnt;
  
  for (let i = 0; i < money_kinds.length; i++) {
    if (money < money_kinds[i]){
      money_kind_cnt = 0;
      answer.push(money_kind_cnt);
      continue;
    }
    money_kind_cnt = calculateMoneyKindCount(money, money_kinds[i]); // 현재 화폐 개수 계산
    money -= money_kinds[i]*money_kind_cnt; // 잔액 계산
    answer.push(money_kind_cnt);
  }
  return answer;
}

function calculateMoneyKindCount(money, money_kind){
  let cnt = parseInt(money/money_kind);
  return cnt;
}

module.exports = problem5;
