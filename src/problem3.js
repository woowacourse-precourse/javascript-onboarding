function problem3(number) {
  let answer = 0;
  for (i = 1; i <= number; i++) {
    const n = i.toString();
    for (j = 0; j < n.length; j++) {
      if (n[j] === "3" || n[j] === "6" || n[j] === "9") {
        answer += 1;
      }
    }
  }
  return answer;
}

module.exports = problem3;
