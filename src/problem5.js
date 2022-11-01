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
  let temp;

  while (money!=0) {
    temp = 0;
    // 50000원 권으로 출금 가능한 경우
    if (money >= 50000) {
      // 50000원권으로 출금할 수 있는 횟수를 정수화
      temp = Math.floor(money/50000);
      // 지갑의 0번 인덱스값 변경
      wallet.splice(0, 1, temp);
      // 출금한 후의 금액으로 money 초기화
      money %= 50000;
    }
    // 10000원 권으로 출금 가능한 경우
    else if (money >= 10000 && money < 50000) {
      // 10000원권으로 출금할 수 있는 횟수를 정수화
      temp = Math.floor(money/10000);
      // 지갑의 1번 인덱스값 변경
      wallet.splice(1, 1, temp);
      // 출금한 후의 금액으로 money 초기화
      money %= 10000;
    }
    // 5000원 권으로 출금 가능한 경우
    else if (money >= 5000 && money < 10000) {
      temp = Math.floor(money/5000);
      wallet.splice(2, 1, temp);
      money %= 5000;
    }
    // 1000원 권으로 출금 가능한 경우
    else if (money >= 1000 && money < 5000) {
      temp = Math.floor(money/1000);
      wallet.splice(3, 1, temp);
      money %= 1000;
    }
    // 500원 권으로 출금 가능한 경우
    else if (money >= 500 && money < 1000) {
      temp = Math.floor(money/500);
      wallet.splice(4, 1, temp);
      money %= 500;
    }
    // 100원 권으로 출금 가능한 경우
    else if (money >= 100 && money < 500) {
      temp = Math.floor(money/100);
      wallet.splice(5, 1, temp);
      money %= 100;
    }
    // 50원 권으로 출금 가능한 경우
    else if (money >= 50 && money < 100) {
      temp = Math.floor(money/50);
      wallet.splice(6, 1, temp);
      money %= 50;
    }
    // 10원 권으로 출금 가능한 경우
    else if (money >= 10 && money < 50) {
      temp = Math.floor(money/10);
      wallet.splice(7, 1, temp);
      money %= 10;
    }
    // 5원 권으로 출금 가능한 경우
    else if (money >= 5 && money < 10) {
      temp = Math.floor(money/5);
      wallet.splice(8, 1, temp);
      money %= 5;
    }
  }

  return wallet;
}

module.exports = problem5;
