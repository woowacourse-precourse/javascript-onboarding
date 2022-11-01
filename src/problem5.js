function problem5(money) {
  let answer = [];
  const list = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (i of list) {
    if (money === 0) {
      answer.push(0);
    } else {
      let count = Math.floor(money / i);
      money %= i;
      answer.push(count);
    }
  }
  return answer;
}

module.exports = problem5;
