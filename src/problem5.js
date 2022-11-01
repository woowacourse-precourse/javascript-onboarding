function problem5(money) {
  // 매개변수 money를 복사
  let moneyCopy = money;
  // 화폐의 단위를 moneyArr에 할당
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  //화폐의 수량을 할당할 변수 선언
  let count;
  // 변수 i가 moneyArr의 길이보다 작은 동안 반복
  let i = 0;
  while (i < moneyArr.length) {
    // 화폐의 개수는 출금할 금액을 화폐 단위로 나눈 값을 자연수로 버림한 값이다.
    count = Math.floor(moneyCopy / moneyArr[i]);
    // 해당 화폐를 개수만큼 곱한 금액을 moneyCopy에서 차감
    moneyCopy -= moneyArr[i] * count;
    // moneyArr에서 해당 화폐의 해당하는 인덱스를 수량으로 치환
    moneyArr[i] = count;
    i++;
  }
  return moneyArr;
}

module.exports = problem5;
