function problem3(number) {
  let answer = 0;

  const arr = Array(number).fill().map((v, i) => i + 1).join("").split("").map(v => +v)
  for (let value of arr) {
    if (value === 3 || value === 6 || value === 9) {
      answer++;
    }
  }
  

  return answer;
}

module.exports = problem3;

