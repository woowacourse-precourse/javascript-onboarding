function problem3(number) {
  return getNum(number);
}

function getNum(number) {
  var clap = 0;
  var cNum = 1;

  while(cNum <= number) { 
    digits = cNum.toString().split('').map(Number);
    digits.forEach(digit => {
      if ([3, 6, 9].includes(digit))  clap += 1;
    });
    cNum += 1;
  }
  return clap;
}

module.exports = problem3;
