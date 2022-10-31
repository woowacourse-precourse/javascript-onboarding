const INPUT = {
  numType: 'number',
  minRange: 1,
  maxRange: 1000000,
};

const RESULT = {
  invalidInput: -1,
};

const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  if (!checkInput(money)) {
    return RESULT.invalidInput;
  }

  return solution(money);
}

function checkInput(input) {
  if (!checkValue(input)) {
    return false;
  }

  if (!checkType(typeof input, INPUT.numType)) {
    return false;
  }

  if (!checkRange(input, INPUT.minRange, INPUT.maxRange)) {
    return false;
  }

  return true;
}

function checkValue(v) {
  return Boolean(v);
}

function checkType(type, checker) {
  return type === checker;
}

function checkRange(range, minRange, maxRange) {
  return range >= minRange && range <= maxRange;
}

function solution(money) {
  let balance = money;

  return MONEY.map(v => {
    const billNum = getBill(balance, v);
    balance = updateMoney(balance, billNum * v);
    return billNum;
  });
}

function getBill(balance, exchanger) {
  return Math.floor(balance / exchanger);
}

function updateMoney(balance, exchangedMoney) {
  return balance - exchangedMoney;
}

module.exports = problem5;
