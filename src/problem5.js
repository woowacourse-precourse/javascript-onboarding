function problem5(money) {
  // 먼저 for 문을 위한 매개변수 배열 선언
  let bank = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 빈배열 선언
  let result = [];

  for (let i = 0; i < bank.length; i++) {
    // money을 매개변수에 맞게 나눠서 몫이 0 아니면
    if (Math.floor(money / bank[i]) !== 0) {
      // 몫을 인덱스 값에 맞게 값을 저장하고 나머지를 money에 재할당
      result[i] = Math.floor(money / bank[i]);
      money = money % bank[i];
      // 몫이 0이면 배열에 0을 넣어줌
    } else {
      result[i] = 0;
    }
  }
  return result;
}

module.exports = problem5;
