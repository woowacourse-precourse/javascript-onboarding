function problem5(money) {
  let numMoney = parseInt(money);
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  // numMoney가 0이 될때 까지 해당 금액을 차감
  // if문이 동작 할 때 result 배열 중 금액에 맞는 위치에 1을 더함
  while (numMoney !== 0) {
    if (numMoney - 50000 > 0) {
      numMoney -= 50000;
      result[0]++;
    } else if (numMoney - 10000 >= 0) {
      numMoney -= 10000;
      result[1]++;
    } else if (numMoney - 5000 >= 0) {
      numMoney -= 5000;
      result[2]++;
    } else if (numMoney - 1000 >= 0) {
      numMoney -= 1000;
      result[3]++;
    } else if (numMoney - 500 >= 0) {
      numMoney -= 500;
      result[4]++;
    } else if (numMoney - 100 >= 0) {
      numMoney -= 100;
      result[5]++;
    } else if (numMoney - 50 >= 0) {
      numMoney -= 50;
      result[6]++;
    } else if (numMoney - 10 >= 0) {
      numMoney -= 10;
      result[7]++;
    } else {
      numMoney -= 1;
      result[8]++;
    }
  }
  return result;
}

module.exports = problem5;
