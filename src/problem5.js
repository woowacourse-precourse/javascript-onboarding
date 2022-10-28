function problem5(money) {
  const wallet = Array(9).fill(0);

  while (money !== 0) {
    if (money >= 50000) {
      wallet[0] += parseInt(money / 50000);
      money -= parseInt(money / 50000) * 50000;
    } else if (money >= 10000) {
      wallet[1] += parseInt(money / 10000);
      money -= parseInt(money / 10000) * 10000;
    } else if (money >= 5000) {
      wallet[2] += parseInt(money / 5000);
      money -= parseInt(money / 5000) * 5000;
    } else if (money >= 1000) {
      wallet[3] += parseInt(money / 1000);
      money -= parseInt(money / 1000) * 1000;
    } else if (money >= 500) {
      wallet[4] += parseInt(money / 500);
      money -= parseInt(money / 500) * 500;
    } else if (money >= 100) {
      wallet[5] += parseInt(money / 100);
      money -= parseInt(money / 100) * 100;
    } else if (money >= 50) {
      wallet[6] += parseInt(money / 50);
      money -= parseInt(money / 50) * 50;
    } else if (money >= 10) {
      wallet[7] += parseInt(money / 10);
      money -= parseInt(money / 10) * 10;
    } else if (money >= 1) {
      wallet[8] += parseInt(money / 1);
      money -= parseInt(money / 1) * 1;
    }
  }

  return wallet;
}

module.exports = problem5;
