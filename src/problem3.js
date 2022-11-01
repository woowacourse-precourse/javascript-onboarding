function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    answer = samYukGu(i, answer);
  }
  return answer;
}

module.exports = problem3;

function samYukGu(number, count) {
  while (number > 0) {
    const digit = number % 10;
    if (digit === 3 || digit === 6 || digit === 9) {
      count++;
    }
    number = Math.floor(number / 10);
  }
  return count;
}
