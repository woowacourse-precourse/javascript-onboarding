function problem5(money) {
  // 예외 처리
  if (money < 1) {
    money = 1;
  }
  if (money > 1000000) {
    money = 1000000;
  }

  const papers = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let answer = [];
  papers.forEach((paper) => {
    answer.push(Math.floor(money / paper));
    money %= paper;
  });
  return answer;
}

module.exports = problem5;
