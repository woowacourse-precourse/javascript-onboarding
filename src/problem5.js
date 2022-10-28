const INPUT = {
  numberType: 'number',
  minRange: 1,
  maxRange: 1000000,
};

const RESULT = {
  exception: -1,
};

const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  if (isWrongInput(money)) {
    return RESULT.exception;
  }

  return fillWallet(money);
}

function isWrongInput(input) {
  if (isWrongValueOfInput(input)) {
    return true;
  }

  if (isWrongTypeOfInput(typeof input)) {
    return true;
  }

  if (isWrongRangeOfInput(input)) {
    return true;
  }

  return false;
}

function isWrongValueOfInput(v) {
  return !v;
}

function isWrongTypeOfInput(type) {
  return type !== INPUT.numberType;
}

function isWrongRangeOfInput(range) {
  return range < INPUT.minRange || range > INPUT.maxRange;
}

function fillWallet(money) {
  const wallet = [];

  for (let i = 0; i < MONEY.length; i++) {
    const moneyNum = exchangeMoney(money, MONEY[i]);
    money = updateMoney(money, moneyNum * MONEY[i]);
    wallet.push(moneyNum);
  }

  return wallet;
}

function exchangeMoney(money, exchanger) {
  return Math.floor(money / exchanger);
}

function updateMoney(money, exchangedMoney) {
  return money - exchangedMoney;
}

module.exports = problem5;
