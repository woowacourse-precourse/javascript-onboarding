function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const j = [...i.toString()];
    for (k of j) {
      if (k === "3" || k === "6" || k === "9") answer++;
    }
  }
  return answer;
}
module.exports = problem3;
