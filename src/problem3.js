function problem3(number) {
  // 369 체크를 위한 set
  const num369 = new Set(["3", "6", "9"]);
  let ans = 0;

  // 1부터 number까지의 각 숫자마다 369의 개수를 ans에 더함
  for (let n = 1; n <= number; n++) {
    ans += count369(n);
  }
  return ans;
}

module.exports = problem3;
