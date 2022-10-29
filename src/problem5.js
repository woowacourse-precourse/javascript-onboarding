const current = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
function problem5(money) {
  var answer = [];
  answer = current.map((cur) => {
    const ret = Math.trunc(money / cur);
    money %= cur;
    return ret;
  });
  return answer;
}
module.exports = problem5;
