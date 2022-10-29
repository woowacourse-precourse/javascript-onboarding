function problem5(money) {
  let temp = money;
  const cashes = Object.keys(cash).map((c) => parseInt(c)).reverse();
  for (let i = 0; i < cashes.length; i++) {
    cash[cashes[i]] = parseInt( temp / cashes[i] );
    temp = temp % cashes[i];
  }

  const answer = Object.values(cash).reverse();
  return answer;
}

// 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
const cash = {
  50000: 0,
  10000: 0,
  5000: 0,
  1000: 0,
  500: 0,
  100: 0,
  50: 0,
  10: 0,
  1: 0
};

module.exports = problem5;
