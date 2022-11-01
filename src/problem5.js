const problem5 = (money) => {
  let answer;
  answer = divideMoney(money);
  return answer;
};
MONEY_TYPE = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const divideMoney = (money) => {
  let wallet = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let nowMoney = money;
  MONEY_TYPE.map((bill, index) => {
    wallet[index] = parseInt(nowMoney / bill);
    nowMoney = nowMoney % bill;
  });
  return wallet;
};

/*
계좌에 들어있는 돈 일부를 은행에서 출금하고자 한다. 돈 담을 지갑이 최대한 가볍도록 
큰 금액의 화폐 위주로 받는다.

돈의 액수 money가 매개변수로 주어질 때, 
오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 
각 몇 개로 변환되는지 
금액이 큰 순서대로 배열에 담아 return 하도록 solution 메서드를 완성하라.

=> 큰 숫자로 먼저 나눠서 몫이 0이 아니라면 해당 몫을 배열에 넣는 식으로 해결하면 될 것 같다
*/
module.exports = problem5;
