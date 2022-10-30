function problem5(money) {}
function checkException(money) {
  x = money >= 1 && money <= 1000000;
  y = money === parseInt(money);
  return x && y;
}
module.exports = problem5;
