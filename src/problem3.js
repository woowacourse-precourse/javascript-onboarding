function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    let num = i;
    while (num >= 1) {
      if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) answer++;
    }
  }
  return answer;
}
module.exports = problem3;
