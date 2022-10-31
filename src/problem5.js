const 오만원 = 50000;
const 만원 = 10000;
const 오천원 = 5000;
const 천원 = 1000;
const 오백원 = 500;
const 백원 = 100;
const 오십원 = 50;
const 십원 = 10;
const 일원 = 1;

function problem5(money) {
  let initialMoney = money;
  const changes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  while (initialMoney > 0) {
    switch (true) {
      case initialMoney >= 오만원: {
        changes[0] = Math.floor(initialMoney / 오만원);
        initialMoney %= 오만원;
        break;
      }
      case initialMoney >= 만원: {
        changes[1] = Math.floor(initialMoney / 만원);
        initialMoney %= 만원;
        break;
      }
      case initialMoney >= 오천원: {
        changes[2] = Math.floor(initialMoney / 오천원);
        initialMoney %= 오천원;
        break;
      }
      case initialMoney >= 천원: {
        changes[3] = Math.floor(initialMoney / 천원);
        initialMoney %= 천원;
        break;
      }
      case initialMoney >= 오백원: {
        changes[4] = Math.floor(initialMoney / 오백원);
        initialMoney %= 오백원;
        break;
      }
      case initialMoney >= 백원: {
        changes[5] = Math.floor(initialMoney / 백원);
        initialMoney %= 백원;
        break;
      }
      case initialMoney >= 오십원: {
        changes[6] = Math.floor(initialMoney / 오십원);
        initialMoney %= 오십원;
        break;
      }
      case initialMoney >= 십원: {
        changes[7] = Math.floor(initialMoney / 십원);
        initialMoney %= 십원;
        break;
      }
      case initialMoney >= 일원: {
        changes[8] = Math.floor(initialMoney / 일원);
        initialMoney %= 일원;
        break;
      }
      default: {
        break;
      }
    }
  }

  return changes;
}

module.exports = problem5;
