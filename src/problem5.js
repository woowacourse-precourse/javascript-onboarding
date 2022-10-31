function problem5(money) {
  var answer;
  answer = moneyChange(money);
  return answer;
}

module.exports = problem5;

//머니 범위 상수 선언
const MONEY_LOW = 1;
const MONEY_HIGH = 1000000;

//입력값이 숫자가 맞는지 범위가 맞는지 평가
function isMoney(money) {
  if (money < MONEY_LOW || money > MONEY_HIGH) return fasle;
  if (typeof money === "number") return true;
  else return false;
}

//입력값에 대한 계산값을 problem5에 넘겨준다.
function moneyChange(money) {
  if (!isMoney(money)) {
    alert("돈을 넣어야 합니다");
    return;
  }

  let exchange = moneyLoop(money);
  return exchange;
}

//실제 입력된 머니에 대한 계산 결과 배열을 리턴하는 함수
function moneyLoop(money) {
  let tempMoney = money;
  const moneyStep = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let exchange = [];

  moneyStep.forEach((compair, index) => {
    const result = Math.floor(tempMoney / compair);
    exchange[index] = result;
    tempMoney = tempMoney % compair;
  });

  return exchange;
}
