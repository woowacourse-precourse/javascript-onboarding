function problem5(money) {
  const banknotes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  for (let i = 0; i < banknotes.length; i++) {
    answer.push(Math.floor(money / banknotes[i]));
    money %= banknotes[i];
  }
}
module.exports = problem5;
