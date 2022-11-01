function problem5(money) {
  return price(money);
}

function price(money) {
  const result = [];
  let balance = money;
  let mount = 0;
  const cashRange = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < cashRange.length; i++) {
    if (money >= cashRange[i]) {
      mount = balance / cashRange[i];
      mount = Number.parseInt(mount);
      balance = balance - mount * cashRange[i];

      result.push(mount);
    } else {
      result.push(0);
    }
  }
  console.log(result);
  return result;
}

function testCode() {
  // problem5(50237);
  // problem5(10000);
  problem5(15000);
  // problem5(1000000);
}
testCode();
module.exports = problem5;
