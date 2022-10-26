function problem3(number) {
  const arr = Array(number)
    .fill()
    .map((_, i) => String(i + 1));

  const pattern = /[369]/g;
  let answer = 0;

  for (const i of arr) {
    const count = i.match(pattern) !== null ? i.match(pattern).length : 0;
    answer += count;
  }

  return answer;
}

module.exports = problem3;
