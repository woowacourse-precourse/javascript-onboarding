const FIFTY_THOUSAND_WON = 50000;
const TEN_THOUSAND_WON = 10000;
const FIVE_THOUSAND_WON = 5000;
const ONE_THOUSAND_WON = 1000;
const FIVE_HUNDRED_WON = 500;
const ONE_HUNDRED_WON = 100;
const FIFTY_WON = 50;
const TEN_WON = 10;
const ONE_WON = 1;
function problem5(money) {
  if (!checkValidation(money)) throw new Error("입력값 오류입니다.");
  var answer = divide(money);
  return answer;
}
function divide(money) {
  const resultArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const divisor = [
    FIFTY_THOUSAND_WON,
    TEN_THOUSAND_WON,
    FIVE_THOUSAND_WON,
    ONE_THOUSAND_WON,
    FIVE_HUNDRED_WON,
    ONE_HUNDRED_WON,
    FIFTY_WON,
    TEN_WON,
    ONE_WON,
  ];
  let index = 0;
  while (money > 0) {
    resultArray[index] = Math.floor(money / divisor[index]);
    money = money % divisor[index];
    index++;
  }
  return resultArray;
}
function checkValidation(money) {
  return checkIsNumber(money) && checkNumberRange(money);
}
function checkNumberRange(money) {
  if (money >= 1 && money <= 1000000) return true;
  return false;
}
function checkIsNumber(money) {
  if (typeof money == "number") return true;
  return false;
}
module.exports = problem5;
