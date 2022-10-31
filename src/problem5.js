function problem5(money) {
  let answer = [];
  const divider = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  divider.reduce((prev, curr) => {
    answer.push(parseInt(prev/curr));
    return prev % curr;
  }, money)
  return answer;
}

module.exports = problem5;
