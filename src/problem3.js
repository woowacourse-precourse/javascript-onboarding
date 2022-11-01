function problem3(number) {
  return getClapNum(number);
}

function getClapNum(number) {
  var claps = 0;
  var curNumber = 1;

  while(curNumber <= number) { 
    digits = curNumber.toString().split('').map(Number);
    digits.forEach(digit => {
      if ([3, 6, 9].includes(digit))  claps += 1;
    });
    curNumber += 1;
  }

  return claps;
}

module.exports = problem3;