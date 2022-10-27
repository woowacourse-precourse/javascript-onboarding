// 기능 요구 사항

// - [X] 동전을 담는 array를 하나 생성한다.
// - [] 50000원으로 나누고 몫을 배열의 첫번째 인덱스에 담아준다.
// - [] 10000원으로 나누고 몫을 배열의 두번째 인덱스에 담아준다.
// - [] 5000원으로 나누고 몫을 배열의 세번째 인덱스에 담아준다.
// - [] 1000원으로 나누고 몫을 배열의 네번째 인덱스에 담아준다.
// - [] 500원으로 나누고 몫을 배열의 5번째 인덱스에 담아준다.
// - [] 100원으로 나누고 몫을 배열의 6번째 인덱스에 담아준다.
// - [] 50원으로 나누고 몫을 배열의 7번째 인덱스에 담아준다.
// - [] 10원으로 나누고 몫을 배열의 8번째 인덱스에 담아준다.
// - [] money를 나눈후 나머지를 money에 넣어준다

function problem5(money) {
  let coin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (money >= 50000) {
    coin.splice(0, 1, Math.floor(money / 50000));
    money %= 50000;
  }
  console.log(money);
  if (money >= 10000) {
    coin.splice(1, 1, Math.floor(money / 10000));
    money %= 10000;
  }
  console.log(money);
  if (money >= 5000) {
    coin.splice(2, 1, Math.floor(money / 5000));
    money %= 5000;
  }
  console.log(money);
  if (money >= 1000) {
    coin.splice(3, 1, Math.floor(money / 1000));
    money %= 1000;
  }
  console.log(money);
  if (money >= 500) {
    coin.splice(4, 1, Math.floor(money / 500));
    money %= 500;
  }
  console.log(money);
  if (money >= 100) {
    coin.splice(5, 1, Math.floor(money / 100));
    money %= 100;
  }
  console.log(money);

  if (money >= 50) {
    coin.splice(6, 1, Math.floor(money / 50));
    money %= 50;
  }
  console.log(money);
  if (money >= 10) {
    coin.splice(7, 1, Math.floor(money / 10));
    money %= 10;
    coin.splice(8, 1, money);
  }
  let answer;
  answer = money;
  return answer;
}

module.exports = problem5;
