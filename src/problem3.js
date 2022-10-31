function problem3(number) {
  const answer = countClap(number);
  return answer;
}

function countClap(number) {
  let clap = 0;
  for (let i = 1; i <= number; i++) {
    let current = i;
    while (current !== 0) {
      if (current % 10 === 3 || current % 10 === 6 || current % 10 === 9) {
        clap++;
      }
      current = Math.floor(current / 10);
    }
  }
  return clap;
}

module.exports = problem3;
