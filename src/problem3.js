function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (const j of String(i)) {
      if (j === "3" || j === "6" || j === "9") count++;
    }
    answer += count;
  }

  return answer;
}

module.exports = problem3;
