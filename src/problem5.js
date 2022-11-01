function problem5(money) {
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const answer = moneyType.reduce((acc, curr) => {
    const count = Math.floor(money / curr);
    money = money % curr;
    acc.push(count);
    return acc;
  }, []);

  return answer;
}

module.exports = problem5;
