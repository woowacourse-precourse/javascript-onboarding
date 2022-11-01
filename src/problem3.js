function problem3(number) {
  let cnt = 0;
  for (let n = 1; n < number + 1; n++) {
    let now = n;
    while (now != 0) {
      if (now % 10 === 3 || now % 10 === 6 || now % 10 === 9) cnt += 1;
      now = Math.floor(now / 10);
    }
  }
  return cnt;
}
module.exports = problem3;
