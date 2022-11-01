function problem5(money) {
  let answer = [];

  const papers = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let paper of papers) {
    const paperCount = getCount(money, paper);
    answer.push(paperCount);
    money -= paper * paperCount;
  }

  return answer;
}

function getCount(money, paper) {
  const count = Math.floor(money / paper);

  return count;
}

module.exports = problem5;
