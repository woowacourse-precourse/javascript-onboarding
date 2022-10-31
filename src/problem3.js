function problem3(number) {
  var answer = 0;
  for (let num = 1; num <= number; num++) {
    num
      .toString()
      .split("")
      .forEach((element) => {
        if ((element == "3") | (element == "6") | (element == "9")) answer++;
      });
  }

  return answer;
}

module.exports = problem3;
