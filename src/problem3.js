function problem3(number) {
  var answer;
  return answer;
}

function countSpecificClap(number) {
  const number_digits = seperateDigits(number);
  let specificClap = 0;
  number_digits.forEach((item) => { if (checkMultiple(item)) specificClap++ });
  
  return specificClap;
}

function seperateDigits(number) {
  const digits = [];

  while (number > 0) {
    digits.push(number % 10);
    number = parseInt(number / 10);
  }

  return digits;
}

function checkMultiple(number) {
  return number % 3 == 0;
}

module.exports = problem3;