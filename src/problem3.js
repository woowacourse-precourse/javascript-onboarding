function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    String(i)
      .split('')
      .forEach((el) => {
        if (el === '3' || el === '6' || el === '9') answer++;
      });
  }

  return answer;
}

module.exports = problem3;
