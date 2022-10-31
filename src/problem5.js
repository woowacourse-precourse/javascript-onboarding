function problem5(money) {
  const count = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  let total = money;

  for (let i = 0; i < count.length; i++) {
    const cnt = Math.floor(total / count[i]);

    total = total % count[i];

    answer.push(cnt);
  }

  return answer;
}

module.exports = problem5;
