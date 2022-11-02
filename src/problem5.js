const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
// 기능1
function checkNum(money) {
  let flag = 0;
  if (money <= 0) flag = 1;
  if (money % 1 !== 0) flag = 1;
  if (money < 1 || money > 1000000) flag = 1;

  return flag;
}

// 기능2
function withdraw(money, wallet) {
  moneyList.map((element, index) => {
    wallet[index] = Math.floor(money / element);
    money -= wallet[index] * element;
  });
  return wallet;
}

function problem5(money) {
  if (checkNum(money)) return;

  let answer = Array.from({ length: moneyList.length }, () => 0);
  answer = withdraw(money, answer);

  return answer;
}

module.exports = problem5;

/* 기능 목록
1. 제한 사항에 따라 money가 1이상 1000000이하인 자연수가 아니면 바로 return 하는 기능
2. 돈이 각각 몇 개로 변환 되는지 세어 배열에 담는 기능
*/
