// 돈 종류 배열
const moneySort = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

// 예외사항
function exception(money) {
  if(money < 1 || money > 1000000) return true;
  return false;
}

// 오만원에서 일원까지 차례로 나눠서 계산하기
function divideChange(money) {

}

function problem5(money) {

}

module.exports = problem5


// 기능들
// 1. 예외사항 1이상 1,000,000이하의 자연수인지 판별
// 2. 오만원권 ~ 일원 배열 만들기
// 3. 오만원권 ~ 일원 배열에서 하나씩 계산