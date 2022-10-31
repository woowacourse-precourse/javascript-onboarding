const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const checkInputError = (n) => n < 1 || n > 1000000;
const countNumByMoney = (n) =>
  MONEY.reduce((acc, cur) => {
    const count = Math.floor(n / cur);
    acc.push(count);
    n %= cur;
    return acc;
  }, []);

exports.checkInputError = checkInputError;
exports.countNumByMoney = countNumByMoney;
exports.MONEY = MONEY;
