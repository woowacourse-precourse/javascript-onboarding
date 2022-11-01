function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = new Array(unit.length).fill(0);

  // 현재 금액(money)에서 현재 단위(unit[i])에 맞게 변환될 수 있는 값을 result에 넣고, 변환된 액수만큼 money에서 차감한 뒤 다음 루프로 넘어가는 반복문
  for (let i = 0; i < unit.length; i++) {
    if (money / unit[i] >= 1) {
      result[i] = Math.floor(money / unit[i]);
      money -= result[i] * unit[i];
    }
  }

  return result;
}

module.exports = problem5;
