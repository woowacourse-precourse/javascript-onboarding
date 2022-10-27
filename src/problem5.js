// 기능 목록
// 1. 몫은 개수, 나머지는 money

function problem5(money) {
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const copyArr = [...arr];
  // [오만 원권 개수, 만 원권 개수, 오천 원권 개수, 천 원권 개수, 오백원 동전 개수, 백원 동전 개수, 오십원 동전 개수, 십원 동전 개수, 일원 동전 개수]
  let answer = arr.fill(0);

  for (let i = 0; i < copyArr.length; i++) {
    if (money >= copyArr[i]) {
      // 몫
      answer[i] = Math.floor(money / copyArr[i]);
      // 나머지
      money = money % copyArr[i];
    } else continue;
  }

  return answer;
}

module.exports = problem5;
