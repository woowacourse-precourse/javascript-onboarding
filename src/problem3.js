function go(N) {
  let arr = [];
  arr[0] = 0;
  for (let i = 1; i < 10001; i++) {
    let answer = 0;
    let man = parseInt(i / 10000);
    let chun = parseInt((i % 10000) / 1000);
    let bac = parseInt((i % 1000) / 100);
    let ship = parseInt((i % 100) / 10);
    let il = parseInt(i % 10);
    if (man == 3 || man == 6 || man == 9) {
      answer++;
    }
    if (chun == 3 || chun == 6 || chun == 9) {
      answer++;
    }
    if (bac == 3 || bac == 6 || bac == 9) {
      answer++;
    }
    if (ship == 3 || ship == 6 || ship == 9) {
      answer++;
    }
    if (il == 3 || il == 6 || il == 9) {
      answer++;
    }
    arr[i] = answer + arr[i - 1];
  }
  return arr[N];
}

function problem3(number) {
  var answer;
  answer = go(number);
  return answer;
}

module.exports = problem3;
