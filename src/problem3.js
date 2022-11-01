function problem3(number) {
  var answer = 0;
  for (var i = 1; i <= number; i++) {
    [...i.toString()].forEach((c) => {
      if (Number(c) === 3 || Number(c) === 6 || Number(c) === 9) {
        answer += 1;
      }
    });
  }
  return answer;
}

module.exports = problem3;
