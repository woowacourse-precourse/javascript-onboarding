function problem5(money) {
  const answer = calculateChange(money);
  return answer;
}

function calculateChange(money) {
  let current = money;
  let divisor = 50000;
  const change = [];
  while (divisor >= 10) {
    change.push(Math.floor(current / divisor));
    current = current % divisor;
    divisor = changeDivisor(divisor);
  }
  change.push(current);
  return change;
}

function changeDivisor(divisor) {
  const divisortoStr = divisor.toString();
  if (divisortoStr[0] === "5") divisor /= 5;
  else if (divisortoStr[0] === "1") divisor /= 2;
  return divisor;
}

module.exports = problem5;
