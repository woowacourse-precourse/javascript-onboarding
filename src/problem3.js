function problem3(number) {
  let clapCount = 0;

  let getClapCount = function (number) {
    const splitDigit = [...('' + number)];
    let countedDigit = splitDigit.filter(
      (num) => num === '3' || num === '6' || num === '9'
    ).length;
    clapCount = countedDigit;
  };

  for (let i = 1; i <= number; i++) {
    getClapCount(i);
  }

  return clapCount;
}


module.exports = problem3;
