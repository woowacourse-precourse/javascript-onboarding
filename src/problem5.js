const { checkInputError, countNumByMoney } = require("./problem5.util");

function problem5(money) {
  if (checkInputError(money)) return "error";
  return countNumByMoney(money);
}

module.exports = problem5;
