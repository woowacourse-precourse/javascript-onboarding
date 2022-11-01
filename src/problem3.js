function problem3(number) {
  let res = 0;
  for (let i = 0; i <= number; i++) {
    res += _counter(i);
  }
  return res;
}

function _counter(number) {
  let remainder = 0;
  let cnt = 0;
  while (number > 0) {
    remainder = number % 10;
    if (remainder == 3 || remainder == 6 || remainder == 9) {
      cnt += 1;
    }
    number = Math.trunc(number / 10);
  }
  return cnt;
}

module.exports = problem3;
