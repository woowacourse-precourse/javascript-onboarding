function problem5(money) {
  const bill50000 = exchangeTo50000(money);
  money %= 50000;

  const bill10000 = exchangeTo10000(money);
  money %= 10000;

  const bill5000 = exchangeTo5000(money);
  money %= 5000;

  const bill1000 = exchangeTo1000(money);
  money %= 1000;

  const bill500 = exchangeTo500(money);
  money %= 500;

  const bill100 = exchangeTo100(money);
  money %= 100;

  const bill50 = exchangeTo50(money);
  money %= 50;

  const bill10 = exchangeTo10(money);
  money %= 10;

  const bill1 = exchangeTo1(money);
  money %= 1;
  
  return [bill50000, bill10000, bill5000, bill1000, bill500, bill100, bill50, bill10, bill1];
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
  let cnt = 0;
  while (money >= FIVETHOUSAND) {
    cnt += 1;
    money -= FIVETHOUSAND;
  }
  return cnt;
}

function exchangeTo1000(money) {
  const TENTHOUSAND = 1000;
  let cnt = 0;
  while (money >= TENTHOUSAND) {
    cnt += 1;
    money -= TENTHOUSAND;
  }
  return cnt;
}

function exchangeTo500(money) {
  const FIVEHUNDRED = 500;
  let cnt = 0;
  while (money >= FIVEHUNDRED) {
    cnt += 1;
    money -= FIVEHUNDRED;
  }
  return cnt;
}

function exchangeTo100(money) {
  const HUNDRED = 100;
  let cnt = 0;
  while (money >= HUNDRED) {
    cnt += 1;
    money -= HUNDRED;
  }
  return cnt;
}

function exchangeTo50(money) {
  const FIFTY = 50;
  let cnt = 0;
  while (money >= FIFTY) {
    cnt += 1;
    money -= FIFTY;
  }
  return cnt;
}

function exchangeTo10(money) {
  const TEN = 10;
  let cnt = 0;
  while (money >= TEN) {
    cnt += 1;
    money -= TEN;
  }
  return cnt;
}

function exchangeTo1(money) {
  const ONE = 1;
  let cnt = 0;
  while (money >= ONE) {
    cnt += 1;
    money -= ONE;
  }
  return cnt;
}

module.exports = problem5;
