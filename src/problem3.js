function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let temp = i;

    while (temp != 0) {
      if (temp % 10 == 3 || temp % 10 == 6 || temp % 10 == 9) {
        answer += 1;
      }
      temp = Math.floor(temp / 10);
    }
  }
  return answer;
}

module.exports = problem3;
