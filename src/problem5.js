function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < changes.length; i++) {
    if (changes[i] > money) continue;
    const value = Math.floor(money / changes[i]);
    answer[i] = value;
    money = money % changes[i];
  }
  return answer;
}

module.exports = problem5;
