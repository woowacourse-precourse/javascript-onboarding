/*
  기능구현 목록
  1. 돈의 단위별로 카운팅 해줄 moneybox 를 만든 후 각 알파벳 이름으로 만들어진 변수에 순차적으로 5만원~10원을 차례대로 대입해준다.
  2. while 문을 통해 money가 0이 될때까지 반복문을 돌아주고 그 과정에서 각 알파벳에 맞는 조건이 성립하면 moneybox에 카운팅을 해준다.
  3. while 문을 빠져나오면 moneybox 를 반환해준다.
*/
function problem5(money) {
  const moneybox = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const A = 50000, B = 10000, C = 5000, D = 1000, E = 500, F = 100, G = 50, H = 10;
  while (money != 0) {
    if (Math.floor(money / A) > 0) {
      moneybox[0] += 1;
      money -= A;
    }
    else if (Math.floor(money / B) > 0) {
      moneybox[1] += 1;
      money -= B;
    }
    else if (Math.floor(money / C) > 0) {
      moneybox[2] += 1;
      money -= C;
    }
    else if (Math.floor(money / D) > 0) {
      moneybox[3] += 1;
      money -= D;
    }
    else if (Math.floor(money / E) > 0) {
      moneybox[4] += 1;
      money -= E;
    }
    else if (Math.floor(money / F) > 0) {
      moneybox[5] += 1;
      money -= F;
    }
    else if (Math.floor(money / G) > 0) {
      moneybox[6] += 1;
      money -= G;
    }
    else if (Math.floor(money / H) > 0) {
      moneybox[7] += 1;
      money -= H;
    }
    else {
      moneybox[8] = money
      money -= money;
    }
  }
  return moneybox;
}

module.exports = problem5;
