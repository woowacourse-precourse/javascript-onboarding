function problem3(number) {
  if (number === 1 || number === 2) return 0;
  var answer = 0;
  for (let i = 3; i < number + 1; i++) {
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
