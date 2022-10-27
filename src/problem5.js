function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let num = 0;
  let count = 0;
  let local = money;
  for (let x of won) {
    if (local % x === local) {
      count++;
      continue;
    }
    num = parseInt(local / x);
    answer[count] = num;
    local -= num * x;
    count++;
  }
  return answer;
}

module.exports = problem5;
