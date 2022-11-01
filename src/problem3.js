function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    String(i)
      .split("")
      .forEach((x) => {
        if (x === "3") answer++;
        if (x === "6") answer++;
        if (x === "9") answer++;
      });
  }

  return answer;
}

module.exports = problem3;
