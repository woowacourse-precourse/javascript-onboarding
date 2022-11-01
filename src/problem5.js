function exFun(money) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 0;
  arr[2] = 0;
  arr[3] = 0;
  arr[4] = 0;
  arr[5] = 0;
  arr[6] = 0;
  arr[7] = 0;
  arr[8] = 0;
  while (true) {
    if (money >= 50000) {
      arr[0] = parseInt(money / 50000);
      money = parseInt(money % 50000);
    } else if (money >= 10000) {
      arr[1] = parseInt(money / 10000);
      money = parseInt(money % 10000);
    } else if (money >= 5000) {
      arr[2] = parseInt(money / 5000);
      money = parseInt(money % 5000);
    } else if (money >= 1000) {
      arr[3] = parseInt(money / 1000);
      money = parseInt(money % 10000);
    } else if (money >= 500) {
      arr[4] = parseInt(money / 500);
      money = parseInt(money % 500);
    } else if (money >= 100) {
      arr[5] = parseInt(money / 100);
      money = parseInt(money % 100);
    } else if (money >= 50) {
      arr[6] = parseInt(money / 50);
      money = parseInt(money % 50);
    } else if (money >= 10) {
      arr[7] = parseInt(money / 10);
      money = parseInt(money % 10);
    } else {
      arr[8] = money;
      break;
    }
  }
  return arr;
}
function problem5(money) {
  var answer = exFun(money);
  return answer;
}
module.exports = problem5;

/*
오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
 */
