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
module.exports = problem3;
