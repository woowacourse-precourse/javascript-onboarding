// 돈을 화폐단위로 나눈 후 몫을 배열에 저장 나머지를 화폐단위로 나눈 후 후 몫을 배열에 저장을 반복하는 함수
function problem5(money) {
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let userMoney = money;
  let answer = [];

  coins.forEach((coin) => {
    answer.push(Math.floor(userMoney / coin));
    userMoney = userMoney % coin;
  });

  return answer;
}

module.exports = problem5;
