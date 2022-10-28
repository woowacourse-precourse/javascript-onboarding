function problem5(money) {
  let result = [];
  let balance = money;
  result.push(is50000(money));
  balance = money - is50000(money) * 50000;

  result.push(is10000(balance));
  balance = balance - is10000(balance) * 10000;

  result.push(is5000(balance));
  balance = balance - is5000(balance) * 5000;

  result.push(is1000(balance));
  balance = balance - is1000(balance) * 1000;

  result.push(is500(balance));
  balance = balance - is500(balance) * 500;

  result.push(is100(balance));
  balance = balance - is100(balance) * 100;

  result.push(is50(balance));
  balance = balance - is50(balance) * 50;

  result.push(is10(balance));
  balance = balance - is10(balance) * 10;

  result.push(is1(balance));
  balance = balance - is1(balance) * 1;

  console.log(result);
  return result;
}

function is50000(money) {
  if (money >= 50000) {
    let ohmanwon = money / 50000;
    return Number.parseInt(ohmanwon);
  }
  return 0;
}

function is10000(money) {
  if (money >= 10000) {
    let manwon = money / 10000;
    return Number.parseInt(manwon);
  }
  return 0;
}

function is5000(money) {
  if (money >= 5000) {
    let ohcheonwon = money / 5000;
    return Number.parseInt(ohcheonwon);
  }
  return 0;
}

function is1000(money) {
  if (money >= 1000) {
    let cheonwon = money / 1000;
    return Number.parseInt(cheonwon);
  }
  return 0;
}

function is500(money) {
  if (money >= 500) {
    let ohBaekwon = money / 500;
    return Number.parseInt(ohBaekwon);
  }
  return 0;
}

function is100(money) {
  if (money >= 100) {
    let baekwon = money / 100;
    return Number.parseInt(baekwon);
  }
  return 0;
}

function is50(money) {
  if (money >= 50) {
    let ohshipwon = money / 50;
    return Number.parseInt(ohshipwon);
  }
  return 0;
}

function is10(money) {
  if (money >= 10) {
    let shipwon = money / 10;
    return Number.parseInt(shipwon);
  }
  return 0;
}

function is1(money) {
  if (money >= 1) {
    let Illwon = money / 1;
    return Number.parseInt(Illwon);
  }
  return 0;
}

function testCode() {
  // problem5(50237);
  // problem5(10000);
  problem5(15000);
  // problem5(1000000);
}
testCode();
module.exports = problem5;
