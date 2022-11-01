function problem3(number) {
  var answer;
  return answer;
}

function numIntoDigits(number) {
  let digits = [];
  while (number > 0) {
    digit = number % 10;
    digits.push(number);
    number /= 10;
    number = Math.floor(number);
  }
  return digits;
}

function countMultiple3(digits) {
  let numMultiple3 = 0;
  digits.forEach(function (digit) {
    if (digit % 3 == 0) {
      numMultiple3 += 1
    }
  });
  return numMultiple3;
}
module.exports = problem3;
