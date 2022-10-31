// 출금 가능한 금액 Enum
const withDrawList = {
  fiftyThousand: 50000,
  tenThousand: 10000,
  fiveThousand: 5000,
  oneThousand: 1000,
  fiveHundred: 500,
  oneHundred: 100,
  fifty: 50,
  ten: 10,
  one: 1,
};

function problem5(money) {
  let balance = money;
  const withDrawArray = Object.keys(withDrawList); // 출금 가능한 금액의 목록을 가져온다.
  const answer = Array.from({ length: withDrawArray.length }, () => 0);

  // 계좌에서 가장 큰 금액 순서대로 출금을 시도한다.
  withDrawArray.map((v, i) => {
    answer[i] = Math.floor(balance / withDrawList[v]); // 출금 가능한 지폐 갯수를 구한다.
    balance -= withDrawList[v] * answer[i]; // 출금된 금액만큼 계좌에서 빼준다.
  });

  return answer;
}

module.exports = problem5;
