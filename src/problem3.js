function count(num) {
  let cnt = 0;
  while (num > 0) {
    let target = num % 10;
    if (target % 10 === 3 || target % 10 === 6 || target % 10 === 9) {
      cnt += 1;
    }
    num = Math.floor(num / 10);
  }
  return cnt;
}

function problem3(number) {
  var answer;
  let sum = 0;

  for (let n = 0; n <= number; n++) {
    sum += count(n);
  }
  answer = sum;

  return answer;
}

module.exports = problem3;
