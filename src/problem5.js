//1. 가장 큰 단위부터 나누어 몫은 해당 단위 갯수
//2. 나머지를 이용해 1~2 반복

function problem5(money) {
  let answer;
  let countMoney = [];
  let input = money;

  const devisorIndex = {
    0: 50000,
    1: 10000,
    2: 5000,
    3: 1000,
    4: 500,
    5: 100,
    6: 50,
    7: 10,
    8: 1
  }

/*   countMoney[0] = parseInt(money / 50000);
  countMoney[1] = parseInt(money % 50000 / 10000);
  countMoney[2] = parseInt(money % 50000 % 10000 / 5000);
  countMoney[3] = parseInt(money % 50000 % 10000 % 5000 / 1000);
  countMoney[4] = parseInt(money % 50000 % 10000 % 5000 % 1000 / 500);
  countMoney[5] = parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 / 100);
  countMoney[6] = parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 % 100 / 50);
  countMoney[7] = parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 % 100 % 50 / 10);
  countMoney[8] = parseInt(money % 50000 % 10000 % 5000 % 1000 % 500 % 100 % 50 % 10 / 1); */

  for (let i = 0; i < 9; i++) {
    countMoney[i] = parseInt(input / devisorIndex[i]);
    input = input % devisorIndex[i]
  }  

  answer = countMoney;
  return answer;
}

module.exports = problem5;
