function problem3(number) {
  var answer;

  function count(number) {
    var result = 0;
    for (let num = 1; num <= number; num++) {
      num
        .toString()
        .split("")
        .forEach((element) => {
          if ((element == "3") | (element == "6") | (element == "9")) result++;
        });
    }
    return result;
  }

  answer = count(number);

  return answer;
}

module.exports = problem3;
