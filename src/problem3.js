function problem3(number) {
  let answer = 0,
    tmp;

  for (let i = 1; i <= number; i++) {
    tmp = i.toString().split('');
    for (let s of tmp) {
      if (s === '3' || s === '6' || s === '9') answer++;
    }
  }
  return answer;
}

module.exports = problem3;
