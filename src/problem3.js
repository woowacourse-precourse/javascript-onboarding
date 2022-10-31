function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    i.toString()
      .split("")
      .map((num) => {
        if (+num % 3 === 0 && +num !== 0) answer++;
      });
  }

  return answer;
}

module.exports = problem3;
