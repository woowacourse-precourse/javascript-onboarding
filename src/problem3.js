function isClap(number) {
  return /3|6|9/.test(number);
}

function clapCount(number) {
  let count = 0;
  while (number > 0) {
      if (number < 3) break;
      if (number % 10 === 3 || number % 10 === 6 || number % 10 === 9) {
          count += 1;
      }
      number = parseInt(number / 10);
  }
  return count;
}

function problem3(number) {
}

module.exports = problem3;
