function problem3(number) {
  var answer;
  return answer;
}

function seperateDigits(number) {
  const digits = [];

  while (number > 0) {
    digits.push(number % 10);
    number = parseInt(number / 10);
  }
}

module.exports = problem3;