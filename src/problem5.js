function problem5(money) {
  let answer = [];

  // 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const len = units.length;

  // 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아 return 
  for (let i=0; i<len; i++) {
    answer.push(Math.floor(money / units[i]));
    money %= units[i];
  }

  return answer;
}

module.exports = problem5;
