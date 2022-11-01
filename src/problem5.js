function problem5(money) {
  // 금액에 따라 출금해야될 지폐와 동전의 갯수를 구하기
  const getMoneyCount = (money) => {
    const money_list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    const withdraw = [];
    for (let i of money_list) {
      withdraw.push(parseInt(money / i));
      money = money % i;
    }
    return withdraw;
  };
  var answer;
  return answer;
}

module.exports = problem5;
