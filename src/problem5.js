function problem5(money) {
  var answer;
  return answer;
}

function exchangeTo50000(money) {
  const FIVEHUNDREDTHOUSAND = 500000;
  const FIFTYTHOUSAND = 50000;
  let cnt = 0;
  while (money >= FIVEHUNDREDTHOUSAND) {
    cnt += 10;
    money -= FIVEHUNDREDTHOUSAND;
  }
  while (money >= FIFTYTHOUSAND) {
    cnt += 1;
    money -= FIFTYTHOUSAND;
  }
  return cnt;
}

function exchangeTo10000(money) {
  const TENTHOUSAND = 10000;
  let cnt = 0;
  while (money >= TENTHOUSAND) {
    cnt += 1;
    money -= TENTHOUSAND;
  }
  return cnt;
}

function exchangeTo5000(money) {
  const FIVETHOUSAND = 5000;
  while (money >= FIVETHOUSAND) {
    cnt += 1;
    money -= FIVETHOUSAND;
  }
  return cnt;
}

function exchangeTo1000(money) {
  const TENTHOUSAND = 1000;
  while (money >= TENTHOUSAND) {
    cnt += 1;
    money -= TENTHOUSAND;
  }
  return cnt;
}

module.exports = problem5;
