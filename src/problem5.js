function solution(money) {
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let userMoney = money;
  let answer = [];

  coins.forEach((item) => {
    answer.push(Math.floor(userMoney / item));
    userMoney = userMoney % item;
  });

  return answer;
}
