function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    for (let j = i; j > 0; j = Math.floor(j / 10)) {
      const num = j % 10;
      if (num === 3 || num === 6 || num === 9) answer += 1;
    }
  }
  return answer;
}

module.exports = problem3;
