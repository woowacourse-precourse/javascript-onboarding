function isInclude369(n) {
  let count = 0;
  let digit;
  while (n > 0) {
    digit = n % 10;
    if (digit === 3 || digit === 6 || digit === 9) {
      count += 1;
    }
    n = Math.floor(n / 10);
  }
  return count;
}

function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += isInclude369(i);
  }

  return answer;
}

module.exports = problem3;
