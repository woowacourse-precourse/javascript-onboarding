function problem5(money) {
  const money_amount = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  //금액별로 필요한 갯수를 처리
  let answer = money_amount.reduce((acc, v) => {
    acc.push(Math.floor(money / v));
    money %= v;
    return acc;
  }, []);

  return answer;
}

module.exports = problem5;
