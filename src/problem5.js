function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let idx = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  // 기능 1. 해당 단위로 money를 변환할 수 있는지 확인하기
  let i = 0;
  while (money != 0) {
    let q = parseInt(money / currency[i]); // 해당 단위로 money를 나눈 몫
    if (q > 0) { // 변환 가능한 경우
      idx[i] = q; // 몫만큼 화폐가 사용됨을 의미 
      money = money % currency[i]; // money 값은 나머지 값이 됨
    }
    i += 1; // 다음 화폐 확인을 위해
  }

  return idx;
}

module.exports = problem5;