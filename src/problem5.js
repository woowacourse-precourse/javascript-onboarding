function problem5(money) {
  const answer = [];

  const bill50000 = exchangeTo50000(money);
  answer.push(bill50000);
  money %= 50000;

  const bill10000 = exchangeTo10000(money);
  answer.push(bill10000);
  money %= 10000;

  const bill5000 = exchangeTo5000(money);
  answer.push(bill5000);
  money %= 5000;

  const bill1000 = exchangeTo1000(money);
  answer.push(bill1000);
  money %= 1000;

  const bill500 = exchangeTo500(money);
  answer.push(bill500);
  money %= 500;

  const bill100 = exchangeTo100(money);
  answer.push(bill100);
  money %= 100;

  const bill50 = exchangeTo50(money);
  answer.push(bill50);
  money %= 50;

  const bill10 = exchangeTo10(money);
  answer.push(bill10);
  money %= 10;

  const bill1 = exchangeTo1(money);
  answer.push(bill1);
  money %= 1;
  
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

function exchangeTo500(money) {
  const FIVEHUNDRED = 500;
  while (money >= FIVEHUNDRED) {
    cnt += 1;
    money -= FIVEHUNDRED;
  }
  return cnt;
}

function exchangeTo100(money) {
  const HUNDRED = 100;
  while (money >= HUNDRED) {
    cnt += 1;
    money -= HUNDRED;
  }
  return cnt;
}

function exchangeTo50(money) {
  const FIFTY = 50;
  while (money >= FIFTY) {
    cnt += 1;
    money -= FIFTY;
  }
  return cnt;
}

function exchangeTo10(money) {
  const TEN = 10;
  while (money >= TEN) {
    cnt += 1;
    money -= TEN;
  }
  return cnt;
}

function exchangeTo1(money) {
  const ONE = 1;
  while (money >= ONE) {
    cnt += 1;
    money -= ONE;
  }
  return cnt;
}

module.exports = problem5;
