function problem5(money) {
  var answer = new Array(9).fill(0);
  let s = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < s.length; i++) {
    answer[i] = Math.floor(n / s[i]);
    n = n % s[i];
  }

  return answer;
}

module.exports = problem5;
