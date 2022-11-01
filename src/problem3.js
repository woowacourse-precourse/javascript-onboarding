function problem3(number) {
  let answer = 0;

  const clap = ["3", "6", "9"];

  for (let n = 1; n <= number; n++) {
    const numberToString = String(n);

    for (s of numberToString) {
      if (clap.includes(s)) {
        answer += 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;
