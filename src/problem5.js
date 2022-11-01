function problem5(money) {
  // 7) 제한사항 구현
  if (money < 1 || money > 1000000 || typeof money !== "number") {
    return "입력받은 계좌금액이 이상합니다";
  }
  // 지폐의 종류를 담은 배열과 answer 초기화
  const AMOUNT_OF_BILL = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = Array.from({ length: 9 }).fill(0);

  let idxOfBill = 0;
  // 1) 인자로 받은 money를 차감해가며 0이 될 때까지 반복한다
  while (money > 0) {
    // 2) 지폐금액이 큰 순서대로 순회하는 과정
    const BILL = AMOUNT_OF_BILL[idxOfBill];
    // 3) money가 지폐금액보다 큰 경우에만 지폐교환을 하는 분기처리
    if (money >= BILL) {
      // 4) 바뀔 수 있는 지폐의 개수, 나머지 돈을 계산
      let billCount = Math.floor(money / BILL);
      const rest = money % BILL;
      money = rest;
      // 5) 지폐의 인덱스 값을 활용해 지폐를 교환해주고, 다음 연산을 위해 0으로 초기화
      answer[idxOfBill] = billCount;
      billCount = 0;
    }
    // 6) 탐색 지폐를 바꾸기 위해 증가
    idxOfBill++;
  }

  return answer;
}

module.exports = problem5;
