function problem5(money) {
  var answer;

  let tempMoney = parseInt(money);
  let units = [];

  units[0] = parseInt(tempMoney / 50000);
  tempMoney -= units[0] * 50000;

  units[1] = parseInt(tempMoney / 10000);
  tempMoney -= units[1] * 10000;

  units[2] = parseInt(tempMoney / 5000);
  tempMoney -= units[2] * 5000;

  units[3] = parseInt(tempMoney / 1000);
  tempMoney -= units[3] * 1000;

  units[4] = parseInt(tempMoney / 500);
  tempMoney -= units[4] * 500;

  units[5] = parseInt(tempMoney / 100);
  tempMoney -= units[5] * 100;

  units[6] = parseInt(tempMoney / 50);
  tempMoney -= units[6] * 50;

  units[7] = parseInt(tempMoney / 10);
  tempMoney -= units[7] * 10;

  units[8] = parseInt(tempMoney);

  answer = units;

  return answer;
}

module.exports = problem5;
