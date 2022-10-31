function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += count369(i);
  }
  return answer;
}

const count369 = (num) => {
  const Candidates = [3, 6, 9];
  let count = 0;
  num
    .toString()
    .split("")
    .forEach((char) => {
      if (Candidates.includes(Number(char))) count++;
    });
  return count;
};

module.exports = problem3;
