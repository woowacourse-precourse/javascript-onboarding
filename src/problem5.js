function problem5(money) {
  let result = [];
  let balance = money;
  result.push(isOhmanwon(money));
  balance = money - isOhmanwon(money) * 50000;
  result.push(isManwon(balance));
  console.log(isOhmanwon(money));
  console.log(balance);
  console.log(result);
}
function isOhmanwon(money) {
  if (money >= 50000) {
    let ohmanwon = money / 50000;
    ohmanwon = Number.parseInt(ohmanwon);
    return ohmanwon;
  }
  return 0;
}
function testCode() {
  problem5(60237);
  // problem5(10000);
  // problem5(15000);
  // problem5(1000000);
}
testCode();
module.exports = problem5;
