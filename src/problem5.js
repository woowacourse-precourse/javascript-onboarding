function problem5(money) {
  let result = [];
  let balance = money;
  result.push(isOhmanwon(money));
  balance = money - isOhmanwon(money) * 50000;
  result.push(isManwon(balance));
  balance = balance - isManwon(balance) * 10000;
  result.push(isOhCheonwon(balance));
  balance = balance - isOhCheonwon(balance) * 5000;

  console.log(balance);
  console.log(result);
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

function testCode() {
  problem5(57237);
  // problem5(10000);
  // problem5(15000);
  // problem5(1000000);
}
testCode();
module.exports = problem5;
