// 기능 목록
// 1. 몫은 필요한 개수로 answer에 저장하고,
// 2. 나머지는 다시 money에 할당하기
// 3. 1, 2 과정을 일원 동전을 검사할 때까지 반복하기

function problem5(money) {
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const copyArr = [...arr];
  // 필요한 개수
  let answer = arr.fill(0);

  for (let i = 0; i < copyArr.length; i++) {
    if (money >= copyArr[i]) {
      // 몫(개수)
      answer[i] = Math.floor(money / copyArr[i]);
      // 나머지(money)
      money = money % copyArr[i];
    } else continue;
  }

  return answer;
}

module.exports = problem5;
