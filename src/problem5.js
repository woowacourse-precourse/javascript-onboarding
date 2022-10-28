const exchange = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function getExchange(haveMoney, exchangeMoney) {
    const change = haveMoney % exchangeMoney;
    const exchangeCount = Math.floor(haveMoney / exchangeMoney);
    return {
        haveMoney: change,
        exchangeCount: exchangeCount,
    };
}
function problem5(money) {
    return exchange.map((toChange) => {
        const moneyInfo = getExchange(money, toChange);
        money = moneyInfo.haveMoney;
        return moneyInfo.exchangeCount;
    });
}
module.exports = problem5;
