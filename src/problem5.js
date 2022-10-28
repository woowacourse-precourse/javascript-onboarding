function problem5(money) {
  let result = [];
  let balance = money;
  result.push(isOhmanwon(money));
  balance = money - isOhmanwon(money) * 50000;

  result.push(isManwon(balance));
  balance = balance - isManwon(balance) * 10000;

  result.push(isOhCheonwon(balance));
  balance = balance - isOhCheonwon(balance) * 5000;

  result.push(isCheonwon(balance));
  balance = balance - isCheonwon(balance) * 1000;

  result.push(isOhBaekwon(balance));
  balance = balance - isOhBaekwon(balance) * 500;

  result.push(isBaekwon(balance));
  balance = balance - isBaekwon(balance) * 100;

  result.push(isOhShipkwon(balance));
  balance = balance - isOhShipkwon(balance) * 50;

  result.push(isShipkwon(balance));
  balance = balance - isShipkwon(balance) * 10;

  result.push(isIllwon(balance));
  balance = balance - isIllwon(balance) * 1;

  console.log(balance);
  console.log(result);
  return result;
}

function isOhmanwon(money) {
  if (money >= 50000) {
    let ohmanwon = money / 50000;
    return Number.parseInt(ohmanwon);
  }
  return 0;
}

function isManwon(money) {
  if (money >= 10000) {
    let manwon = money / 10000;
    return Number.parseInt(manwon);
  }
  return 0;
}

function isOhCheonwon(money) {
  if (money >= 5000) {
    let ohcheonwon = money / 5000;
    return Number.parseInt(ohcheonwon);
  }
  return 0;
}

function isCheonwon(money) {
  if (money >= 1000) {
    let cheonwon = money / 1000;
    return Number.parseInt(cheonwon);
  }
  return 0;
}

function isOhBaekwon(money) {
  if (money >= 500) {
    let ohBaekwon = money / 500;
    return Number.parseInt(ohBaekwon);
  }
  return 0;
}

function isBaekwon(money) {
  if (money >= 100) {
    let baekwon = money / 100;
    return Number.parseInt(baekwon);
  }
  return 0;
}

function isOhShipkwon(money) {
  if (money >= 50) {
    let ohshipwon = money / 50;
    return Number.parseInt(ohshipwon);
  }
  return 0;
}

function isShipkwon(money) {
  if (money >= 10) {
    let shipwon = money / 10;
    return Number.parseInt(shipwon);
  }
  return 0;
}

function isIllwon(money) {
  if (money >= 1) {
    let Illwon = money / 1;
    return Number.parseInt(Illwon);
  }
  return 0;
}

function testCode() {
  problem5(50237);
  // problem5(10000);
  // problem5(15000);
  // problem5(1000000);
}
testCode();
module.exports = problem5;
