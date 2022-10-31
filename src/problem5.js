function problem5(money) {
  let temp = money;
  // cash 객체에 있는 key들을 모아서 리스트로 관리함 (나누기 할 목적)
  const cashes = Object.keys(cash).map((c) => parseInt(c)).reverse();
  // 가장 큰 돈 순서대로
  for (let i = 0; i < cashes.length; i++) {
    // 몫을 cash 객체에 있는 돈 갯수에 더해준다
    cash[cashes[i]] = parseInt(temp / cashes[i]);
    // 큰 돈으로 계산하고 남은 나머지를 업데이트 함
    temp = temp % cashes[i];
  }
  // cash 객체에 있는 value들을 큰 순서대로 반환한다.
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
