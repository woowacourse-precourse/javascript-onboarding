function clap(num) {
  const a369 = [3, 6, 9];
  let cnt = 0;
  while (num > 0) {
    if (a369.includes(num % 10)) {
      cnt += 1;
    }
    num = Math.floor(num / 10);
  }
  return cnt;
}

function problem3(number) {
  let ans = 0;
  for (let i = 0; i <= number; i++) {
    ans += clap(i);
  }
  return ans;
}

// console.log(problem3(13));
// console.log(problem3(33));
// console.log(problem3(10000));

module.exports = problem3;
