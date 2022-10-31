function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j of String(i)) {
      if (j === '3' || j === '6' || j === '9') cnt++;
    }
    answer += cnt;
  }

  return answer;
}

module.exports = problem3;
