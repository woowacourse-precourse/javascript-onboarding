function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let num = i.toString().split("");
    for (let j = 0; j < num.length; j++) {
      if (
        num[j].includes("3") ||
        num[j].includes("6") ||
        num[j].includes("9")
      ) {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
