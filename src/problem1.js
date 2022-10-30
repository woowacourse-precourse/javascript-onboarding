function problem1(pobi, crong) {
  var answer;
  if (
    pobi[1] !== pobi[0] + 1 ||
    crong[1] !== crong[0] + 1 ||
    pobi[0] % 2 === 0 ||
    crong[0] % 2 === 0
  ) {
    return -1;
  }

  function calc(n) {
    let sum = 0;
    let mult = 1;

    while (n > 0) {
      sum += n % 10;
      mult *= n % 10;
      n = Math.floor(n / 10);
    }
    return Math.max(sum, mult);
  }
  let resultP = Math.max(calc(pobi[0]), calc(pobi[1]));
  let resultC = Math.max(calc(crong[0]), calc(crong[1]));

  if (resultP > resultC) {
    answer = 1;
  } else if (resultP === resultC) {
    answer = 0;
  } else answer = 2;
  return answer;
}

module.exports = problem1;
