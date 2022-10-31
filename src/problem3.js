function clapCalculator(i) {
  let clapCnt = 0;

  for (let x of String(i)) {
    if (x === '3' || x === '6' || x === '9') clapCnt++;
  }

  return clapCnt;
}

function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const cnt = clapCalculator(i);
    answer += cnt;
  }

  return answer;
}

module.exports = problem3;
