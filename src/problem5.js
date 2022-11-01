function problem5(money) {
  var answer;
  return answer;
}

function errorHandler(num) {
  // 금액이 1,000,000보다 클 경우
  if (num > 1000000)  return true;

  return false;
}

function ATM(money) {
  // 지갑
  wallet = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let temp = 0;

  while (money!=0) {
    // 50000원 권으로 출금 가능한 경우
    if (money >= 50000) {
      temp = money/50000;
      // 지갑의 0번 인덱스값 변경
      wallet.splice(0, 1, temp);
      // 출금한 후의 금액으로 money 초기화
      money = money%50000;
    }
  }

  return wallet;
}

module.exports = problem5;
