function check369(gameNumber) {
  let count = 0;
  for (i = 1; i <= gameNumber; i++) {
    if ((i % 10) % 3 === 0 && i % 10 !== 0) count++;
    if (i > 10 && Math.floor(i / 10) % 3 === 0) count++;
  }
  return count;
}

function problem3(number) {
  const answer = check369(number);
  return answer;
}

module.exports = problem3;
