function problem3(number) {
  let answer = 0;
  for (n=1; n<=number; n++) {
    const digits = numIntoDigits(n);
    answer += countIs369(digits);
  }
  return answer;
}

function numIntoDigits(number) {
  let digits = [];
  while (number > 0) {
    digit = number % 10;
    digits.push(digit);
    number /= 10;
    number = Math.floor(number);
  }
  return digits;
}

function countIs369(digits) {
  let num369 = 0;
  digits.forEach(function (digit) {
    if (digit == 3) {
      num369 += 1
    }
    if (digit == 6) {
      num369 += 1
    }
    if (digit == 9) {
      num369 += 1
    }
  });
  return num369;
}
module.exports = problem3;
