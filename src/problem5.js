function getExchange(haveMoney, exchangeMoney) {
  const change = haveMoney % exchangeMoney;
  const exchangeCount = Math.floor(haveMoney / exchangeMoney);
  return {
      haveMoney: change,
      exchangeCount: exchangeCount,
  };
}

function problem5(money) {}

module.exports = problem5;
