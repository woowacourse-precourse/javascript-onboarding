function problem3(number) {
  var answer = 0;
  var currentNumber = 1;
  while (currentNumber <= number) {
    var tmp = currentNumber.toString().split("");
    tmp.map((value) => {
      if (
        parseInt(value) == 3 ||
        parseInt(value) == 6 ||
        parseInt(value) == 9
      ) {
        answer += 1;
      }
    });
    currentNumber += 1;
  }
  return answer;
}

module.exports = problem3;
