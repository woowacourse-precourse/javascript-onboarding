function addDigits(number) {
  let digits = number; 
  let digitsSum = 0;

  while (digits > 0) {
    digitsSum += digits % 10; 
    digits = Math.floor(digits / 10);
  }

  return digitsSum;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
