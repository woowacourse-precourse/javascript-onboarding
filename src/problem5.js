const getEachChangeCount = (money) => {
  let result = [];
  const change = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < change.length; i++) {
    const count = Math.floor(money / change[i]);
    result.push(count);
    money %= change[i];
  }
  return result;
};

function problem5(money) {
  var answer;
  answer = getEachChangeCount(money);
  return answer;
}

module.exports = problem5;
