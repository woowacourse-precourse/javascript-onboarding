function getDigits(number) {
  return number.toString().split("");
}

function has369(digits) {
  let count = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "3") count++;
    if (digits[i] === "6") count++;
    if (digits[i] === "9") count++;
  }
  return count;
}

function checkAllNum(number) {
  let countAll = 0;
  let digits;
  for (let i = 1; i <= number; i++) {
    digits = getDigits(i);
    countAll += has369(digits);
  }
  return countAll;
}

function problem3(number) {
  var answer;
  answer = checkAllNum(number);
  return answer;
}

module.exports = problem3;
