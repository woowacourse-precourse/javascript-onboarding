function problem3(number) {
  var answer = 0;
  for (let i = 1; i < number + 1; i++) {
    let strNum = String(i);
    for (let x of strNum) {
      if (x === "3" || x === "6" || x === "9") {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
