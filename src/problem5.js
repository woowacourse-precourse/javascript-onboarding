function problem5(money) {
  const paper = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  paper.forEach((p, index) => {
    const converted = Math.floor(money / p);
    answer[index] = converted;
    money = money - converted * p;
  });
  return answer;
}
module.exports = problem5;
