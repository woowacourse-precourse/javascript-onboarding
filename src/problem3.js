function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    i.toString()
      .split("")
      .map((el) => {
        if (el.includes("3") || el.includes("6") || el.includes("9")) answer++;
      });
  }
  return answer;
}

module.exports = problem3;
